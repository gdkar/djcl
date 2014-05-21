// Salsa20 implementation
// Contributed to Cryptocat by Dmitry Chestnykh
// 21-01-2013
var salsa = 
{
  sigma:  : (function ( ) { var a = [ 0x61707865, 0x3320646e, 0x79622d32, 0x6b206574 ]; return a; } )(),
  key     : (function ( ) { var a = [ 0,0,0,0,0,0,0,0 ]; return a; } )(), 
  nonce   : (function ( ) { var a = [ 0,0             ]; return a; } )(), 
  rounds  : (function ( ) { var rounds = 20; return rounds; })(),
  block   : (function ( ) { var a = [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                                      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 ]; return a; })(),
  k : function ( key ) {
  for (var i = 0, j = 0; i < 8; i++, j += 4) {
    this.key[i] = ((key[j]   & 0xff)<<0)  |
                  ((key[j+1] & 0xff)<<8)  |
                  ((key[j+2] & 0xff)<<16) |
                  ((key[j+3] & 0xff)<<24);
    } 
  },
  n : function ( nonce ) {
    for (var i = 0, j = 0; i < 2; i++, j += 4) {
      this.nonce[i] = ((nonce[j]   & 0xff)<<0)  |
                      ((nonce[j+1] & 0xff)<<8)  |
                      ((nonce[j+2] & 0xff)<<16) |
                      ((nonce[j+3] & 0xff)<<24);
      } 
  }
  _salsa  : function ( key, nonce ){
    var j0  = this.sigma[0],         j1  = key[0],            j2  = key[1],          j3  = key[2],
        j4  = key[3],                j5  = this.sigma[1],     j6  = nonce[0],        j7  = nonce[1],
        j8  = nonce[2],              j9  = [3],               j10 = this.sigma[2],   j11 = key[4],
        j12 = key[5],                j13 = key[6],            j14 = key[7],          j15 = this.sigma[3],
        x0  = j0,                    x1  = j1,                x2  = j2,              x3  = j3,
        x4  = j4,                    x5  = j5,                x6  = j6,              x7  = j7,
        x8  = j8,                    x9  = j9,                x10 = j10,             x11 = j11,
        x12 = j12,                   x13 = j13,               x14 = j14,             x15 = j15,
        i = 0,                       u = 0;
            for (var i = 0; i < this.rounds; i += 2) {
                u = x0 + x12;
                x4 ^= (u<<7) | (u>>>(32-7));
                u = x4 + x0;
                x8 ^= (u<<9) | (u>>>(32-9));
                u = x8 + x4;
                x12 ^= (u<<13) | (u>>>(32-13));
                u = x12 + x8;
                x0 ^= (u<<18) | (u>>>(32-18));

                u = x5 + x1;
                x9 ^= (u<<7) | (u>>>(32-7));
                u = x9 + x5;
                x13 ^= (u<<9) | (u>>>(32-9));
                u = x13 + x9;
                x1 ^= (u<<13) | (u>>>(32-13));
                u = x1 + x13;
                x5 ^= (u<<18) | (u>>>(32-18));

                u = x10 + x6;
                x14 ^= (u<<7) | (u>>>(32-7));
                u = x14 + x10;
                x2 ^= (u<<9) | (u>>>(32-9));
                u = x2 + x14;
                x6 ^= (u<<13) | (u>>>(32-13));
                u = x6 + x2;
                x10 ^= (u<<18) | (u>>>(32-18));

                u = x15 + x11;
                x3 ^= (u<<7) | (u>>>(32-7));
                u = x3 + x15;
                x7 ^= (u<<9) | (u>>>(32-9));
                u = x7 + x3;
                x11 ^= (u<<13) | (u>>>(32-13));
                u = x11 + x7;
                x15 ^= (u<<18) | (u>>>(32-18));

                u = x0 + x3;
                x1 ^= (u<<7) | (u>>>(32-7));
                u = x1 + x0;
                x2 ^= (u<<9) | (u>>>(32-9));
                u = x2 + x1;
                x3 ^= (u<<13) | (u>>>(32-13));
                u = x3 + x2;
                x0 ^= (u<<18) | (u>>>(32-18));

                u = x5 + x4;
                x6 ^= (u<<7) | (u>>>(32-7));
                u = x6 + x5;
                x7 ^= (u<<9) | (u>>>(32-9));
                u = x7 + x6;
                x4 ^= (u<<13) | (u>>>(32-13));
                u = x4 + x7;
                x5 ^= (u<<18) | (u>>>(32-18));

                u = x10 + x9;
                x11 ^= (u<<7) | (u>>>(32-7));
                u = x11 + x10;
                x8 ^= (u<<9) | (u>>>(32-9));
                u = x8 + x11;
                x9 ^= (u<<13) | (u>>>(32-13));
                u = x9 + x8;
                x10 ^= (u<<18) | (u>>>(32-18));

                u = x15 + x14;
                x12 ^= (u<<7) | (u>>>(32-7));
                u = x12 + x15;
                x13 ^= (u<<9) | (u>>>(32-9));
                u = x13 + x12;
                x14 ^= (u<<13) | (u>>>(32-13));
                u = x14 + x13;
                x15 ^= (u<<18) | (u>>>(32-18));
            }

            x0 += j0;
            x1 += j1;
            x2 += j2;
            x3 += j3;
            x4 += j4;
            x5 += j5;
            x6 += j6;
            x7 += j7;
            x8 += j8;
            x9 += j9;
            x10 += j10;
            x11 += j11;
            x12 += j12;
            x13 += j13;
            x14 += j14;
            x15 += j15;
            
            this.block[ 0] = ( x0 >>>  0) & 0xff; this.block[ 1] = ( x0 >>>  8) & 0xff;
            this.block[ 2] = ( x0 >>> 16) & 0xff; this.block[ 3] = ( x0 >>> 24) & 0xff;
            this.block[ 4] = ( x1 >>>  0) & 0xff; this.block[ 5] = ( x1 >>>  8) & 0xff;
            this.block[ 6] = ( x1 >>> 16) & 0xff; this.block[ 7] = ( x1 >>> 24) & 0xff;
            this.block[ 8] = ( x2 >>>  0) & 0xff; this.block[ 9] = ( x2 >>>  8) & 0xff;
            this.block[10] = ( x2 >>> 16) & 0xff; this.block[11] = ( x2 >>> 24) & 0xff;
            this.block[12] = ( x3 >>>  0) & 0xff; this.block[13] = ( x3 >>>  8) & 0xff;
            this.block[14] = ( x3 >>> 16) & 0xff; this.block[15] = ( x3 >>> 24) & 0xff;
            this.block[16] = ( x4 >>>  0) & 0xff; this.block[17] = ( x4 >>>  8) & 0xff;
            this.block[18] = ( x4 >>> 16) & 0xff; this.block[19] = ( x4 >>> 24) & 0xff;
            this.block[20] = ( x5 >>>  0) & 0xff; this.block[21] = ( x5 >>>  8) & 0xff;
            this.block[22] = ( x5 >>> 16) & 0xff; this.block[23] = ( x5 >>> 24) & 0xff;
            this.block[24] = ( x6 >>>  0) & 0xff; this.block[25] = ( x6 >>>  8) & 0xff;
            this.block[26] = ( x6 >>> 16) & 0xff; this.block[27] = ( x6 >>> 24) & 0xff;
            this.block[28] = ( x7 >>>  0) & 0xff; this.block[29] = ( x7 >>>  8) & 0xff;
            this.block[30] = ( x7 >>> 16) & 0xff; this.block[31] = ( x7 >>> 24) & 0xff;
            this.block[32] = ( x8 >>>  0) & 0xff; this.block[33] = ( x8 >>>  8) & 0xff;
            this.block[34] = ( x8 >>> 16) & 0xff; this.block[35] = ( x8 >>> 24) & 0xff;
            this.block[36] = ( x9 >>>  0) & 0xff; this.block[37] = ( x9 >>>  8) & 0xff;
            this.block[38] = ( x9 >>> 16) & 0xff; this.block[39] = ( x9 >>> 24) & 0xff;
            this.block[40] = (x10 >>>  0) & 0xff; this.block[41] = (x10 >>>  8) & 0xff;
            this.block[42] = (x10 >>> 16) & 0xff; this.block[43] = (x10 >>> 24) & 0xff;
            this.block[44] = (x11 >>>  0) & 0xff; this.block[45] = (x11 >>>  8) & 0xff;
            this.block[46] = (x11 >>> 16) & 0xff; this.block[47] = (x11 >>> 24) & 0xff;
            this.block[48] = (x12 >>>  0) & 0xff; this.block[49] = (x12 >>>  8) & 0xff;
            this.block[50] = (x12 >>> 16) & 0xff; this.block[51] = (x12 >>> 24) & 0xff;
            this.block[52] = (x13 >>>  0) & 0xff; this.block[53] = (x13 >>>  8) & 0xff;
            this.block[54] = (x13 >>> 16) & 0xff; this.block[55] = (x13 >>> 24) & 0xff;
            this.block[56] = (x14 >>>  0) & 0xff; this.block[57] = (x14 >>>  8) & 0xff;
            this.block[58] = (x14 >>> 16) & 0xff; this.block[59] = (x14 >>> 24) & 0xff;
            this.block[60] = (x15 >>>  0) & 0xff; this.block[61] = (x15 >>>  8) & 0xff;
            this.block[62] = (x15 >>> 16) & 0xff; this.block[63] = (x15 >>> 24) & 0xff;

  },
  block: function ( data 
}

