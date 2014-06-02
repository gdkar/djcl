
/** Speed hack for defensive UTF8 decoding.
 ** Relies on ability to detect tampered Function constructor
 ** (which provides the same functionality as eval)
 **/

module.exports = (function(){
  var f = (function g(){
      try{
       var f = g.constructor;
       f.prototype = null;
       if(f instanceof f) return f
      }catch(e){}})(),
    o = "{", t = '"', c = "", i = 0,
    hex= "0123456789abcdef",
    hex_= "0123456789ABCDEF",
    b64_="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/-_",
    t_ = (function (a){
      var s='return {',i=0,l=0;
      a=""+a;l=a.length;
      for(;i<l;i++){ s +="'"+a[i]+"':"+i+','}
      s += '};';
      return (new f(s)());
    }),
    u_ = (function (){
      var s="return '",i=0;
      for(;i<65536;i++)
        s+=("\\u"+hex[(i>>12)&15]+hex[(i>>8)&15]+hex[(i>>4)&15]+hex[i&15]);
      s+="';";
      return (new f(s)());
    })(),
    ut_ = (function(){
      var s="return {",i=0;
      for(;i<65536;i++)
        s+=("'\\u"+hex[(i>>12)&15]+hex[(i>>8)&15]+hex[(i>>4)&15]+hex[i&15]+"':"+i+",");
      s+="};";
      return (new f(s)());

    })()
    a_ = (function (){
      var s="return '",i=0;
      for(;i<256;i++)
        s+="\\x"+hex[(i>>4)&15]+hex[i&15];
      s+="';";
      var res = (new f(s)());
      return res;
    })(),
    at_ = (function (){
      var s="return {",i=0;
      for(;i<256;i++){
        s+=("'\\x"+hex[(i>>4)&15]+hex[i&15]+"':"+i+",");
      }
      s+="};";
      return new f(s)();
    })(),
     bt_ = (function (){
      var s="return {",i=0;
      for(;i<64;i++)
        s+=("'"+b64_[i]+"':"+i+",");
        s+="'-':62,'_':63};"
      return new f(s)();
    })(),


/**
 * @namespace Encoding functions
 * @author Anonymized
 * @description
 * <p>Support for ASCII, UTF-8, Base64 and Hex encoding.</p>
 * <p>DJS is simply not good at encoding, because it lacks the
 * built-in functions to get the character code at a given offset
 * from a string (charCodeAt), and its inverse, String.fromCharCode.</p>
 *
 * <p>This means we have to use a literal object whose field names are
 * ASCII characters and values are the associated codes, and a string
 * containing every character sorted by code for the inverse operation.</p>
 *
 * <p>For UTF-8, such a table would be too large and instead, we use
 * binary search on the string containing all UTF-8 characters,
 * using the built in lexicographic order of JavaScript.
 * Since the complete UTF-8 alphabet is itself 200KB, it is loaded
 * from its own file, utf8.js. Loading this file is optional: without
 * it every non-ASCII character is treated like the null byte.</p>
 */
  encoding = {
/** Hex alphabet. */
  hex: '0123456789abcdef',
  hex_table: t_(hex),
/** UTF-8 alphabet. Initially contains the null byte, actual value is in utf8.js */
  ascii: a_,
  ascii_table: at_,

  utf8: u_,
  utf8_table: ut_,

/** Base64 alphabet. Is missing the last two characters to support URL style */
  base64: b64_,
  base64_table: bt_,
  
  b2h: function(c){return ""+this.hex[(c/16)&15]+this.hex[(c&15)];},
  b64c: function(s){return this.base64_table[""+s];},

  charCode: function(a){return this.utf8_table[''+a];},
  fromCharCode: function(a){return this.utf8[a&0xffff];},

  a2b: function(a){return  this.ascii_table[a] ;},

  b2a: function(n){return this.ascii[(n>>>0)&255];},

  astr2hstr: function(s){
    var res="",i=0,l=(s+='').length;
    for(;i<l;i++){res+=this.b2h(this.a2b(s[i]));}
    return res;},

  hstr2astr: function(s){
   var i = 0, u = 0, c = '', res = "",l=(s+='').length;
   for(i;i<l; i+=2){
     c = +('0x'+s[i]+s[i+1]);
     res+= this.ascii[c&255]
   }
   return res;
  },
  ucs2_encode: function(s)
  {
    var res="",i=0;
    for(i=0;i<s.length;i+=2){
      res += this.utf8[(256*this.a2b(s[i+1])+this.a2b(s[i]))&0xffff];
    }
    return res;
  },
  ucs2_decode: function(s)
  {
    var res="",i=0,c=0;
    for(i=0;i<s.length;i++){
      c=this.charCode(s[i]);
      res+=this.b2a(c&255)+this.b2a(((c>>8)&255));
    }
    return res;
  },


/** Encode an ASCII string to base64
  * @param {string} input ASCII
  * @returns {string} base64 encoding of input.
  */
  base64_encode: function(s)
  {
   return this._base64_encode(s, false);
  },

/** Encode an ASCII string to url-compatible base64
  * @param {string} input ASCII
  * @returns {string} url-base64 encoding of input.
  */
  base64_urlencode: function(s)
  {
   return this._base64_encode(s, true);
  },

  _base64_encode: function(s, url)
  {
   var res = "", i = 0, c = 0, s = s+'',b=0,l=s.length;
   for(;i<s.length;i++){
    c = (c<<8)+this.a2b(s[i]);b+=8;
    for(;b>=6;b-=6){res+=this.base64[((c>>(b-6))&63)];}
   }
   if(b>0)c<<=8;b+=8;
   for(;b>=6;b-=6){res+=this.base64[((c>>(b-6))&63)];}
    while(res.length%4) res+=!url ? '=' : '.';
   return res;
  },

/** Decode a base64-encoded string to ASCII
  * @param {string} input base64 (can be url-safe or not)
  * @returns {string} the decoded ASCII string.
  */
  base64_decode: function(s)
  {
   var s = s+'', res = "", buf = [0,0,0,0],
       i = 0, x = '', c = 0,l=s.length,b=0;
   console.log(l);
   for(;i<l&&this.b64c(s[i])!=null;i++){
      c = (c<<6)+this.b64c(s[i]);b+=6;
   for(;b>=8;b-=8){res+=this.b2a((c>>(b-8))&255);}
   }
   return res;
 }
  };
 return encoding;
})();


/** Encode a raw ASCII string back into a JavaScript string
  * @param {string} input ASCII
  * @returns {string} JavaScript unicode string representing the UTF-8 input.
  */
/*  utf8_encode: function(s)
  {
   var res = "", i = 0, c = 0, p = '',
       buffer = [0,0,0,0], expected = [0,0];

   for(i=0; i < s.length; i++)
   {
    c = this.a2b(p = s[i]);
    if(expected[0] != 0)
    {
     // Invalied continuation
     if(c<128 || c > 191){expected=[0,0]; continue}
     buffer[(expected[1]+1-expected[0]--)&3] = c;

     if(!expected[0])
     {
      res += this.fromCharCode(
        expected[1]==1 ? (buffer[0]&31)<<6 | (buffer[1] & 63)
         : (buffer[0] & 15)<<12 | (buffer[1] & 63)<<6 | (buffer[2] & 63));
     }
     else continue;
    }
    buffer[0] = c;

    if(c<128) res += p;
    else if(c>191 && c<224) expected = [1,1];
    else if(c>=224 && c<240) expected = [2,2];
    // Otherwise, invalid head (ignored)
   }

   return res;
  },*/

/** Decode an UTF-8 string to its raw ASCII equivalent.
  * @param {string} input JavaScript string (containing unicode characters)
  * @returns {string} decoded ASCII string
  */
/*  utf8_decode: function(s)
  {
   var res = "", i = 0, c = 0, s = s+'',
       x = this.b2a(0);

   for(i=0; i<s.length; i++)
   {
    c = this.charCode(x = s[i]);
    if(c < 128) res += x;
    else if(c < 2048)
     res += this.b2a((c>>6)|192)+this.b2a((c&63)|128);
    else
     res += this.b2a((c>>12)|224)+this.b2a(128|(c>>6)&63)+this.b2a(128|c&63);
   }

   return res;
  },*/

