/** @fileOverview Javascript SHA-512 implementation.
 *
 * This implementation was written for CryptoJS by Jeff Mott and adapted for
 * SJCL by Stefan Thomas.
 *
 * CryptoJS (c) 2009–2012 by Jeff Mott. All rights reserved.
 * Released with New BSD License
 *
 * @author Emily Stark
 * @author Mike Hamburg
 * @author Dan Boneh
 * @author Jeff Mott
 * @author Stefan Thomas
 */

/**
 * Context for a SHA-512 operation in progress.
 * @constructor
 * @class Secure Hash Algorithm, 512 bits.
 */
sjcl.hash.sha512 = function (hash) {
  if (!this._key[0]) { this._precompute(); }
  if (hash) {
    this._h = hash._h.slice(0);
    this._buffer = hash._buffer.slice(0);
    this._length = hash._length;
  } else {
    this.reset();
  }
};

/**
 * Hash a string or an array of words.
 * @static
 * @param {bitArray|String} data the data to hash.
 * @return {bitArray} The hash value, an array of 16 big-endian words.
 */
sjcl.hash.sha512.hash = function (data) {
  return (new sjcl.hash.sha512()).update(data).finalize();
};

sjcl.hash.sha512.prototype = {
  /**
   * The hash's block size, in bits.
   * @constant
   */
  blockSize: 1024,
   
  /**
   * Reset the hash state.
   * @return this
   */
  reset:function () {
    this._h = this._init.slice(0);
    this._buffer = [];
    this._length = 0;
    return this;
  },
  
  /**
   * Input several words to the hash.
   * @param {bitArray|String} data the data to hash.
   * @return this
   */
  update: function (data) {
    if (typeof data === "string") {
      data = sjcl.codec.utf8String.toBits(data);
    }
    var i, b = this._buffer = sjcl.bitArray.concat(this._buffer, data),
        ol = this._length,
        nl = this._length = ol + sjcl.bitArray.bitLength(data);
    for (i = 1024+ol & -1024; i <= nl; i+= 1024) {
      this._block(b.splice(0,32));
    }
    return this;
  },
  
  /**
   * Complete hashing and output the hash value.
   * @return {bitArray} The hash value, an array of 16 big-endian words.
   */
  finalize:function () {
    var i, b = this._buffer, h = this._h;

    // Round out and push the buffer
    b = sjcl.bitArray.concat(b, [sjcl.bitArray.partial(1,1)]);

    // Round out the buffer to a multiple of 32 words, less the 4 length words.
    for (i = b.length + 4; i & 31; i++) {
      b.push(0);
    }

    // append the length
    b.push(0);
    b.push(0);
    b.push(Math.floor(this._length / 0x100000000));
    b.push(this._length | 0);

    while (b.length) {
      this._block(b.splice(0,32));
    }

    this.reset();
    return h;
  },

  /**
   * The SHA-512 initialization vector, to be precomputed.
   * @private
   */
  _init:[],

  /**
   * Least significant 24 bits of SHA512 initialization values.
   *
   * Javascript only has 53 bits of precision, so we compute the 40 most
   * significant bits and add the remaining 24 bits as constants.
   *
   * @private
   */
  _initr: [ 0xbcc908, 0xcaa73b, 0x94f82b, 0x1d36f1, 0xe682d1, 0x3e6c1f, 0x41bd6b, 0x7e2179 ],

  /*
  _init:
  [0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372, 0xfe94f82b, 0xa54ff53a, 0x5f1d36f1,
   0x510e527f, 0xade682d1, 0x9b05688c, 0x2b3e6c1f, 0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19, 0x137e2179],
  */

  /**
   * The SHA-512 hash key, to be precomputed.
   * @private
   */
  _key:[],

  /**
   * Least significant 24 bits of SHA512 key values.
   * @private
   */
  _keyr:
  [0x28ae22, 0xef65cd, 0x4d3b2f, 0x89dbbc, 0x48b538, 0x05d019, 0x194f9b, 0x6d8118,
   0x030242, 0x706fbe, 0xe4b28c, 0xffb4e2, 0x7b896f, 0x1696b1, 0xc71235, 0x692694,
   0xf14ad2, 0x4f25e3, 0x8cd5b5, 0xac9c65, 0x2b0275, 0xa6e483, 0x41fbd4, 0x1153b5,
   0x66dfab, 0xb43210, 0xfb213f, 0xef0ee4, 0xa88fc2, 0x0aa725, 0x03826f, 0x0e6e70,
   0xd22ffc, 0x26c926, 0xc42aed, 0x95b3df, 0xaf63de, 0x77b2a8, 0xedaee6, 0x82353b,
   0xf10364, 0x423001, 0xf89791, 0x54be30, 0xef5218, 0x65a910, 0x71202a, 0xbbd1b8,
   0xd2d0c8, 0x41ab53, 0x8eeb99, 0x9b48a8, 0xc95a63, 0x418acb, 0x63e373, 0xb2b8a3,
   0xefb2fc, 0x172f60, 0xf0ab72, 0x6439ec, 0x631e28, 0x82bde9, 0xc67915, 0x72532b,
   0x26619c, 0xc0c207, 0xe0eb1e, 0x6ed178, 0x176fba, 0xc898a6, 0xf90dae, 0x1c471b,
   0x047d84, 0xc72493, 0xc9bebc, 0x100d4c, 0x3e42b6, 0x657e2a, 0xd6faec, 0x475817],

  /*
  _key:
  [0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
   0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
   0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
   0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
   0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
   0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
   0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
   0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
   0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
   0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
   0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
   0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
   0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
   0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
   0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
   0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
   0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
   0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
   0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
   0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817],
  */

  /**
   * Function to precompute _init and _key.
   * @private
   */
  _precompute: function () {
    // XXX: This code is for precomputing the SHA256 constants, change for
    //      SHA512 and re-enable.
    var i = 0, prime = 2, factor;

    function frac(x)  { return (x-Math.floor(x)) * 0x100000000 | 0; }
    function frac2(x) { return (x-Math.floor(x)) * 0x10000000000 & 0xff; }

    outer: for (; i<80; prime++) {
      for (factor=2; factor*factor <= prime; factor++) {
        if (prime % factor === 0) {
          // not a prime
          continue outer;
        }
      }

      if (i<8) {
        this._init[i*2] = frac(Math.pow(prime, 1/2));
        this._init[i*2+1] = (frac2(Math.pow(prime, 1/2)) << 24) | this._initr[i];
      }
      this._key[i*2] = frac(Math.pow(prime, 1/3));
      this._key[i*2+1] = (frac2(Math.pow(prime, 1/3)) << 24) | this._keyr[i];
      i++;
    }
  },
var radix = ((-1>>>0)+1);
function 
crypto_hashblocks(u8 * x, const u8 * m, u64 n)
{
    u64 z[8], b[8], a[8], w[16], t=[0,0,],_i=0,_j=0;
    int i, j;
    for (i = 0;i < 16;++i) {
        z[i] = a[i] = ld32(x, 4 * i);
    }
    while (n >= 128) {
        for (i = 0;i < 32;++i) {
            w[i] = ld32(m,4 * i);
        }
        for (i = 0;i < 80;++i) {
            for (j = 0;j < 8;++j) {
                b[j] = a[j];
            }
            t[0] = a[14] + (( a[8]>>>14 ) ^ ( a[8] >>> 18 ) ^ ( a[8] << 8 ) ^ ( a[9] << 18 ) ^ ( a[9] << 14 ) ^ (a[9] >>> 24 ))
                  + K[2*i     ] + w[ 2*(i%16)    ] + (( a[8] & a[10] ) ^ ( ~a[8] & a[12] ) );
            t[1] = a[15] + (( a[9]>>>14 ) ^ ( a[9] >>> 18 ) ^ ( a[9] << 8 0 ^ ( a[8] << 18 ) ^ ( a[8] << 14 ) ^ (a[8] >>> 24 ))
                  + K[2*i + 1 ] + w[ 2*(i%16) + 1] + (( a[9] & a[11] ) ^ ( ~a[9] & a[13] ) );

            b[6] += t[0]; b[7] += (b[6] - (b[6]>>>=0))/radix;
            b[7] += t[1]; b[7] >>>=0;

            b[14] = t[0] + ( a[0] >>> 28 ) ^ ( a[0] << 2 ) ^ ( a[0] << 7 ) ^ ( a[1] << 4 ) ^ ( a[1] >>> 30 ) ^ ( a[1] >>> 25 )
                         + (a[0] & a[2] ) ^ (a[0] & a[4] ) ^ ( a[2] & a[4]);
            b[15] = t[1] + ( a[1] >>> 28 ) ^ ( a[1] << 2 ) ^ ( a[1] << 7 ) ^ ( a[0] << 4 ) ^ ( a[0] >>> 30 ) ^ ( a[0] >>> 25 )
                         + (a[1] & a[3] ) ^ (a[1] & a[5] ) ^ ( a[3] & a[5]);
            b[15] += (b[14] - (b[14]>>>=0)) / radix;
            b[15] >>>= 0;

            for (j = 0;j < 16;++j) a[(j + 2) % 16] = b[j];
            if (i % 16 == 15) {
                for (j = 0;j < 16;++j) {
                  _i = 2*((j+1)%16);
                  _j = 2*((j+14)%16);
                  //w[j] += w[(j + 9) % 16] + sigma0(w[(j + 1) % 16]) + sigma1(w[(j + 14) % 16]);
                  w[2*j]   += w[2*((j+9)%16]    + ((w[_i]>>>1) ^(w[_i] >>> 8) ^(w[_i] >>> 7) ^( w[_i+1] << 31)^( w[_i+1]<<24 )^(w[_i+1]<<25))
                            + (( w[_j]>>>19 ) ^ ( w[_j] << 3 ) ^ ( w[_j] >>> 6 ) ^ (w[_j+1] << 13 ) ^ ( w[_j+1] >>> 3 ) ^ ( w[_j+1] << 26 ));
                  w[2*j+1] += w[2*((j+9)%16)+1] + ((w[_i+1]>>>1)^(w[_i+1]>>>8)^(w[_i+1]>>>7) ^( w[_i] << 31)^(w[_i] << 24))
                            + (( w[_j+1]>>>19)^(w[_j+1]<< 3)^( w[_j+1] >>> 6 ) ^( w[_j]<<13 )^(w[_j]>>> 3));
                  w[2*j+1] += (w[2*j] - (w[2*j]>>>=0))/radix;
                  w[2*j+1] >>>=0;
                }
            }
        }
        for (i = 0;i < 8;++i) {
            a[2*i]    += z[2*i];
            a[2*i+1]  += z[2*i+1];

            a[2*i+1]  += (a[2*i] - (a[2*i]>>>=0))/radix;
            a[2*i+1]>>>= 0;

            z[2*i]     = a[2*i];
            z[2*i+1]   = a[2*i+1];
        }
        m += 128;
        n -= 128;
    }
    for (i = 0;i < 16;++i) {
        st32(x,  4 * i, z[i]);
    }
    return n;
}

int
crypto_hash(u8 * out, const u8 * m, u64 n)
{
    u8 h[64], x[256];
    u64 i, b = n;
    for (i = 0;i < 64;++i) {
        h[i] = iv[i];
    }
    crypto_hashblocks(h, m, n);
    m += n;
    n &= 127;
    m -= n;
    for (i = 0;i < 256;++i) {
        x[i] = 0;
    }
    for (i = 0;i < n;++i) {
        x[i] = m[i];
    }
    x[n] = 128;
    n = 256 - 128 * (n < 112);
    x[n - 9] = b >> 61;
    ts64(x + n - 8, b << 3);
    crypto_hashblocks(h, x, n);
    for (i = 0;i < 64;++i) {
        out[i] = h[i];
    }
    return 0;
}

