var encoding={hex:"0123456789abcdef",utf8:"\x00",utf8_table:{},ascii:"\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1a\x1b\x1c\x1d\x1e\x1f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7f\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8a\x8b\x8c\x8d\x8e\x8f\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d\x9e\x9f\xa0\xa1\xa2\xa3\xa4\xa5\xa6\xa7\xa8\xa9\xaa\xab\xac\xad\xae\xaf\xb0\xb1\xb2\xb3\xb4\xb5\xb6\xb7\xb8\xb9\xba\xbb\xbc\xbd\xbe\xbf\xc0\xc1\xc2\xc3\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb\xcc\xcd\xce\xcf\xd0\xd1\xd2\xd3\xd4\xd5\xd6\xd7\xd8\xd9\xda\xdb\xdc\xdd\xde\xdf\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xef\xf0\xf1\xf2\xf3\xf4\xf5\xf6\xf7\xf8\xf9\xfa\xfb\xfc\xfd\xfe\xff",ascii_table:{"0":48,"1":49,"2":50,"3":51,"4":52,"5":53,"6":54,"7":55,"8":56,"9":57,"\x00":0,"\x01":1,"\x02":2,"\x03":3,"\x04":4,"\x05":5,"\x06":6,"\x07":7,"\b":8,"\t":9,"\n":10,"\x0b":11,"\f":12,"\r":13,"\x0e":14,"\x0f":15,"\x10":16,"\x11":17,"\x12":18,"\x13":19,"\x14":20,"\x15":21,"\x16":22,"\x17":23,"\x18":24,"\x19":25,"\x1a":26,"\x1b":27,"\x1c":28,"\x1d":29,"\x1e":30,"\x1f":31," ":32,"!":33,'"':34,"#":35,"$":36,"%":37,"&":38,"'":39,"(":40,")":41,"*":42,"+":43,",":44,"-":45,".":46,"/":47,":":58,";":59,"<":60,"=":61,">":62,"?":63,"@":64,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,"[":91,"\\":92,"]":93,"^":94,_:95,"`":96,a:97,b:98,c:99,d:100,e:101,f:102,g:103,h:104,i:105,j:106,k:107,l:108,m:109,n:110,o:111,p:112,q:113,r:114,s:115,t:116,u:117,v:118,w:119,x:120,y:121,z:122,"{":123,"|":124,"}":125,"~":126,"\x7f":127,"\x80":128,"\x81":129,"\x82":130,"\x83":131,"\x84":132,"\x85":133,"\x86":134,"\x87":135,"\x88":136,"\x89":137,"\x8a":138,"\x8b":139,"\x8c":140,"\x8d":141,"\x8e":142,"\x8f":143,"\x90":144,"\x91":145,"\x92":146,"\x93":147,"\x94":148,"\x95":149,"\x96":150,"\x97":151,"\x98":152,"\x99":153,"\x9a":154,"\x9b":155,"\x9c":156,"\x9d":157,"\x9e":158,"\x9f":159,"\xa0":160,"\xa1":161,"\xa2":162,"\xa3":163,"\xa4":164,"\xa5":165,"\xa6":166,"\xa7":167,"\xa8":168,"\xa9":169,"\xaa":170,"\xab":171,"\xac":172,"\xad":173,"\xae":174,"\xaf":175,"\xb0":176,"\xb1":177,"\xb2":178,"\xb3":179,"\xb4":180,"\xb5":181,"\xb6":182,"\xb7":183,"\xb8":184,"\xb9":185,"\xba":186,"\xbb":187,"\xbc":188,"\xbd":189,"\xbe":190,"\xbf":191,"\xc0":192,"\xc1":193,"\xc2":194,"\xc3":195,"\xc4":196,"\xc5":197,"\xc6":198,"\xc7":199,"\xc8":200,"\xc9":201,"\xca":202,"\xcb":203,"\xcc":204,"\xcd":205,"\xce":206,"\xcf":207,"\xd0":208,"\xd1":209,"\xd2":210,"\xd3":211,"\xd4":212,"\xd5":213,"\xd6":214,"\xd7":215,"\xd8":216,"\xd9":217,"\xda":218,"\xdb":219,"\xdc":220,"\xdd":221,"\xde":222,"\xdf":223,"\xe0":224,"\xe1":225,"\xe2":226,"\xe3":227,"\xe4":228,"\xe5":229,"\xe6":230,"\xe7":231,"\xe8":232,"\xe9":233,"\xea":234,"\xeb":235,"\xec":236,"\xed":237,"\xee":238,"\xef":239,"\xf0":240,"\xf1":241,"\xf2":242,"\xf3":243,"\xf4":244,"\xf5":245,"\xf6":246,"\xf7":247,"\xf8":248,"\xf9":249,"\xfa":250,"\xfb":251,"\xfc":252,"\xfd":253,"\xfe":254,"\xff":255},base64:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",_searchCharTable:function(f,h){var f=f+"",h=h+"",g=0,e=h.length,d=0,c="";
while(d!=(d=(g+e)>>1)){c=(d>>>=0)<h.length?h[d]:"";if(f==c){return d}if(f>c){g=d}else{e=d
}}return 0},b2h:function(g){var f=this.hex+"",e=(g>>4)&15,d=g&15;return((e>>>=0)<f.length?f[e]:"0")+((d>>>=0)<f.length?f[d]:"0")
},b64c:function(a){if(a=="+"||a=="-"){return 62}if(a=="/"||a=="_"){return 63}if(a>="0"&&a<="9"){return +a+52
}return this._searchCharTable(a,this.base64)},charCode:function(b){var c=this.ascii_table;
return(b.length==1&&b<="\xFF"?c[b]:this._searchCharTable(b,this.utf8))},a2b:function(b){var c=this.ascii_table;
return(b.length==1&&b<="\xFF"?c[b]:0)},b2a:function(c){var b=this.ascii+"";return(c>>>=0)<b.length?b[c]:"\x00"
},fromCharCode:function(d){var b=this.ascii+"",c=this.utf8+"";return(d>>>=0)<b.length?b[d]:(d>>>=0)<c.length?c[d]:"\x00"
},astr2hstr:function(c){var b="",a=0,c=c+"";for(a=0;a<c.length;a++){b+=this.b2h(this.a2b(c[a]))
}return b},hstr2astr:function(f){var e=0,a=0,g="",d="",b=this.ascii+"",f=f+"";for(e=0;
e<f.length;e++){if(!(e&1)){g=f[e]}else{a=+("0x"+g+f[e]);d+=(a>>>=0)<b.length?b[a]:"\x00"
}}return d},utf8_encode:function(e){var d="",b=0,h=0,g="",a=[0,0,0,0],f=[0,0];for(b=0;
b<e.length;b++){h=this.a2b(g=e[b]);if(f[0]!=0){if(h<128||h>191){f=[0,0];continue}a[(f[1]+1-f[0]--)&3]=h;
if(!f[0]){d+=this.fromCharCode(f[1]==1?(a[0]&31)<<6|(a[1]&63):(a[0]&15)<<12|(a[1]&63)<<6|(a[2]&63))
}else{continue}}a[0]=h;if(h<128){d+=g}else{if(h>191&&h<224){f=[1,1]}else{if(h>=224&&h<240){f=[2,2]
}}}}return d},utf8_decode:function(e){var d="",b=0,f=0,e=e+"",a=this.b2a(0);for(b=0;
b<e.length;b++){f=this.charCode(a=e[b]);if(f<128){d+=a}else{if(f<2048){d+=this.b2a((f>>6)|192)+this.b2a((f&63)|128)
}else{d+=this.b2a((f>>12)|224)+this.b2a(128|(f>>6)&63)+this.b2a(128|f&63)}}}return d
},base64_encode:function(a){return this._base64_encode(a,false)},base64_urlencode:function(a){return this._base64_encode(a,true)
},_base64_encode:function(l,a){var h="",g=0,j=0,l=l+"",d=[0,0],e=!a?"=":"",b="",k=this.base64+"0123456789"+(a?"-_":"+/"),f=function(c){return(c>>>=0)<k.length?k[c]:"A"
};for(g=0;g<l.length;g++){j=this.a2b(l[g]);if(g%3==2){j+=(d[1]<<8)+(d[0]<<16);h+=f((j>>>18)&63);
h+=f((j>>>12)&63);h+=f((j>>>6)&63);h+=f(j&63);d=[0,0]}else{d[(g%3)&1]=j}}if(g%3!=0){j=(d[1]<<8)+(d[0]<<16);
h+=f((j>>>18)&63);h+=f((j>>>12)&63);h+=(g%3==2)?f((j>>>6)&63):e;h+=e}return h},base64_decode:function(f){var f=f+"",e="",b=[0,0,0,0],d=0,a="",g=0;
if((f.length&3)!=0){f+="="}for(d=0;d<f.length;d++){if((a=f[d])=="="){break}g=this.b64c(a);
if((d&3)==3){g+=(b[2]<<6)+(b[1]<<12)+(b[0]<<18);e+=this.b2a((g>>>16)&255);e+=this.b2a((g>>>8)&255);
e+=this.b2a(g&255);b=[0,0,0,0]}else{b[(d%4)&3]=g}}if((d&3)>1){g=(b[2]<<6)+(b[1]<<12)+(b[0]<<18);
e+=this.b2a((g>>>16)&255);if((d&3)==3){e+=this.b2a((g>>>8)&255)}}return e},};(function(){var e=encoding.hex,h=(function d(){try{var c=d.constructor;
c.prototype=null;if(c instanceof c){return c}}catch(g){}})(),j="{",b='"',k="",a=0;
if(typeof h=="function"){for(a=0;a<65536;a++){k=e[a>>12]+e[a>>8&15]+e[a>>4&15]+e[a&15];
j+='"\\u'+k+'":'+a+",";b+="\\u"+k}j=new h("return ["+j+"},"+b+'"]')();encoding.utf8=j[1];
encoding.utf8_table=j[0];encoding.charCode=function(c){return this.utf8_table[c]};
encoding.fromCharCode=function(c){return this.utf8[c]}}})();var hashing=(function(){var b={name:"sha1",identifier:"2b0e03021a",size:20,block:64,hash:function(m){var f=(m+="\x80").length,c=f>>6,h=f&63,g="",e=0,d=0,l=[1732584193,4023233417,2562383102,271733878,3285377520],k=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
while(h++!=56){m+="\x00";if(h==64){c++;h=0}}for(m+="\x00\x00\x00\x00",h=3,f=8*(f-1);
h>=0;h--){m+=encoding.b2a(f>>(8*h)&255)}for(e=0;e<m.length;e++){d=(d<<8)+encoding.a2b(m[e]);
if((e&3)==3){k[(e>>2)&15]=d;d=0}if((e&63)==63){this._round(l,k)}}for(e=0;e<l.length;
e++){for(d=3;d>=0;d--){g+=encoding.b2a(l[e]>>(8*d)&255)}}return g},_round:function(u,t){var r=u[0],q=u[1],p=u[2],o=u[3],n=u[4],l=0,g=[1518500249,1859775393,2400959708,3395469782],h=function(d,c){return(c<<d)|(c>>>32-d)
},j=0,m=function(f,e,k,i){if(f<20){return(e&k)|(~e&i)}if(f<40){return e^k^i}if(f<60){return(e&k)|(e&i)|(k&i)
}return e^k^i};for(l=0;l<80;l++){if(l>=16){t[l&127]=h(1,t[(l-3)&127]^t[(l-8)&127]^t[(l-14)&127]^t[(l-16)&127])
}j=(h(5,r)+m(l,q,p,o)+n+t[l&127]+g[(l/20)&3])|0;n=o;o=p;p=h(30,q);q=r;r=j}u[0]=(u[0]+r)|0;
u[1]=(u[1]+q)|0;u[2]=(u[2]+p)|0;u[3]=(u[3]+o)|0;u[4]=(u[4]+n)|0}};var a={name:"sha-256",identifier:"608648016503040201",size:32,block:64,key:[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],hash:function(t){var u=t+"\x80",m=u.length,c=m>>6,o=m&63,n="",d="",h=0,g=0,f=0,e=0,r=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],q=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
while(o++!=56){u+="\x00";if(o==64){c++;o=0}}for(u+="\x00\x00\x00\x00",o=3,m=8*(m-1);
o>=0;o--){u+=encoding.b2a(m>>(8*o)&255)}for(h=0;h<u.length;h++){g=(g<<8)+encoding.a2b(u[h]);
if((h&3)==3){q[(h>>2)&15]=g;g=0}if((h&63)==63){this._round(r,q)}}for(h=0;h<r.length;
h++){for(g=3;g>=0;g--){n+=encoding.b2a(r[h]>>(8*g)&255)}}return n},_round:function(y,r){var q=y[0],p=y[1],o=y[2],n=y[3],m=y[4],l=y[5],k=y[6],j=y[7],A=0,z=0,x=0,i=0;
for(A=0;A<64;A++){if(A<16){i=r[A&15]}else{z=r[(A+1)&15];x=r[(A+14)&15];i=r[A&15]=((z>>>7^z>>>18^z>>>3^z<<25^z<<14)+(x>>>17^x>>>19^x>>>10^x<<15^x<<13)+r[A&15]+r[(A+9)&15])|0
}i=(i+j+(m>>>6^m>>>11^m>>>25^m<<26^m<<21^m<<7)+(k^m&(l^k))+this.key[A&63]);j=k;k=l;
l=m;m=n+i|0;n=o;o=p;p=q;q=(i+((p&o)^(n&(p^o)))+(p>>>2^p>>>13^p>>>22^p<<30^p<<19^p<<10))|0
}y[0]=y[0]+q|0;y[1]=y[1]+p|0;y[2]=y[2]+o|0;y[3]=y[3]+n|0;y[4]=y[4]+m|0;y[5]=y[5]+l|0;
y[6]=y[6]+k|0;y[7]=y[7]+j|0}};return{sha256:a,sha1:b,SHA256:function(c){return encoding.astr2hstr(this.sha256.hash(c))
},SHA1:function(c){return encoding.astr2hstr(this.sha1.hash(c))},hmac_hash:a,HMAC:function(g,l){var g=g+"",l=l+"",f=0,j=this.hmac_hash,m=0,k="",d="",e="";
if(g.length>j.block){g=j.hash(g)}while(g.length<j.block){g+="\x00"}for(f=0;f<g.length;
f++){m=encoding.a2b(g[f]);d+=encoding.b2a(m^54);e+=encoding.b2a(m^92)}return encoding.astr2hstr(j.hash(e+j.hash(d+l)))
}}})();var aes={Stables:(function(){var m=function(){return[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
},g=function(){return[m(),m(),m(),m(),m()]},k=g(),t=g(),j=k[4],p=t[4],h=0,n=0,f=0,b=0,r=0,o=0,e=0,a=0,q=0,l=m(),c=m();
for(h=0;h<256;h++){c[((l[h&255]=h<<1^(h>>7)*283)^h)&255]=h}for(n=f=0;!j[n&255];n^=(!b?1:b),f=c[f&255],f=(!f?1:f)){q=f^f<<1^f<<2^f<<3^f<<4;
q=q>>8^q&255^99;j[n&255]=q;p[q&255]=n;o=l[(r=l[(b=l[n&255])&255])&255];a=o*16843009^r*65537^b*257^n*16843008;
e=l[q&255]*257^q*16843008;for(h=0;h<4;h++){k[h&3][n&255]=e=e<<24^e>>>8;t[h&3][q&255]=a=a<<24^a>>>8
}}return[k,t]})(),key:(function(){var b=function(){return[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
};return[b(),b()]})(),keySize:8,setKey:function(c){var c=c+"",a=[0,0,0,0,0,0,0,0],e=c.length>24?8:(c.length>16?6:4),f=function(g){var g=g+"";
while(g.length<4*e){g="\x00"+g}return g},c=f(c),b=0,d=0;this.keySize=e;for(b=0;b<c.length;
b++){d=(d<<8)+encoding.a2b(c[b]);if((b%4)==3){a[(b/4)&7]=d}}this._setKey(a)},_setKey:function(h){var c=0,a=0,b=1,d=0,g=this.keySize,f=this.key[0],l=this.key[1],k=this.Stables[1],e=this.Stables[0][4];
for(c=0;c<4*g+28;c++){if(c<g){f[c&63]=h[c&7];continue}d=f[(c-1)&63];if(!(c%g)||(g==8&&!(c%4))){d=e[d>>>24&255]<<24^e[d>>16&255]<<16^e[d>>8&255]<<8^e[d&255];
if(!(c%g)){d=d<<8^d>>>24^b<<24;b=b<<1^(b>>7)*283}}f[c&63]=f[(c-g)&63]^d}for(a=0;c>0;
a++,c--){d=f[(!(a&3)?c-4:c)&63];l[a&63]=(c<=4||a<4)?d:k[0][e[d>>>24&255]&255]^k[1][e[d>>16&255]&255]^k[2][e[d>>8&255]&255]^k[3][e[d&255]&255]
}},ctEq:function(d,c){var f=true,e=0,d=d+"",c=c+"",g=d.length<c.length?c.length:d.length;
for(e=0;e<g;e++){if(((e>>>=0)<d.length?d[e]:"")!=((e>>>=0)<c.length?c[e]:"")){f=false
}}return f},_aes:function(l,o){var z=this.key[(!o?0:1)&1],x=l[0]^z[0],w=l[(!o?1:3)&3]^z[1],v=l[2]^z[2],u=l[(!o?3:1)&3]^z[3],y=0,e=0,n=0,q=0,p=4,r=[0,0,0,0],f=5+this.keySize,t=this.Stables[(!o?0:1)&1],k=t[0],j=t[1],h=t[2],g=t[3],m=t[4];
for(q=0;q<f;q++){y=k[x>>>24&255]^j[w>>16&255]^h[v>>8&255]^g[u&255]^z[p&63];e=k[w>>>24&255]^j[v>>16&255]^h[u>>8&255]^g[x&255]^z[(p+1)&63];
n=k[v>>>24&255]^j[u>>16&255]^h[x>>8&255]^g[w&255]^z[(p+2)&63];u=k[u>>>24&255]^j[x>>16&255]^h[w>>8&255]^g[v&255]^z[(p+3)&63];
p+=4;x=y;w=e;v=n}for(q=0;q<4;q++){r[(!o?q:(3&-q))&3]=m[x>>>24&255]<<24^m[w>>16&255]<<16^m[v>>8&255]<<8^m[u&255]^z[p++&63];
y=x;x=w;w=v;v=u;u=y}return r},_blockGen:function(k,c){var k=k+"",h=k.length,d=0,f=0,j=h&15,a=(!c&&!j?1:0)+(!j?0:1)+(h>>4),b=(a<<4)-h,g=function(){var p=[0,0,0,0],o=0,l=0,e=0,q=d++<<4,n=0;
for(o=0;o<4;o++){for(n=0,l=q+4*o,e=l+4;l<e;l++){n=(n<<8)+encoding.a2b((l>>>=0)<k.length?k[l]:"\x00")
}p[o&3]=n}return p};if(!c){for(f=0;f<b;f++){k+=encoding.b2a(b)}}else{while(!!(j++%16)){k+="\x00"
}}return{blocks:a,gen:g}},_output:function(g,e){var d="",b=0,a=0,h=0,f=16;if(e){f-=1+g[3]&255
}for(b=0;b<4;b++){for(h=g[b&3],a=0;a<4&&d.length<=f;a++){d+=encoding.b2a(h>>(24-8*a)&255)
}}return d},_xor4:function(a,b){return[a[0]^b[0],a[1]^b[1],a[2]^b[2],a[3]^b[3]]},CBC:function(j,c,a){var d=0,f="",h=false,g=this._blockGen(j,a),c=this._blockGen(c,true).gen(),b=[0,0,0,0],e=this._xor4;
for(d=0;d<g.blocks;d++){b=g.gen();if(!a){c=this._aes(e(c,b),false);f+=this._output(c,false)
}else{f+=this._output(e(c,this._aes(b,true)),d+1==g.blocks);c=b}}return f},CCM_encrypt:function(l,e,k,a){var a=(a<4||a>16||!!(a&1))?8:a,l=l+"",b=l.length,g=b>>3,h=0,d=0,c="",j="",f={data:"",tag:""};
for(h=2;h<4&&!!(g>>>8*h);h++){}for(e+="";e.length<16;e+="\x00"){}for(d=0;d<e.length;
d++){c+=e[d];if(d>13-h){break}}j=this._ccmTag(l,c,k,a,h);f=this._ctrMode(l,c,j,a,h);
return f.data+f.tag},CCM_decrypt:function(n,f,m,a){var a=(a<4||a>16||!!(a&1))?8:a,n=n+"",b=n.length,h="",j=(b-a)>>3,k=0,e=0,g={data:"",tag:""},l="",d="";
for(e=0;e<n.length;e++){if(e<b-a){h+=n[e]}else{l+=n[e]}}for(k=2;k<4&&!!(j>>>8*k);
k++){}for(f+="";f.length<16;f+="\x00"){}for(e=0;e<f.length;e++){d+=f[e];if(e>13-k){break
}}g=this._ctrMode(h,d,l,a,k);n=this._ccmTag(g.data,d,m,a,k);return{valid:this.ctEq(n,g.tag),data:g.data}
},_ccmTag:function(r,g,o,d,m){var h=0,r=r+"",e=r.length,j=this._xor4,l=[0,0,0,0],n=(function(i){var i=i+"",q=i.length,p=function(c){return encoding.b2a(c)
};if(!q){return i}if(q<=65279){return p(q>>16)+p(q&255)+i}return"\xff\xfe"+p(q>>>24)+p(q>>16&255)+p(q>>8&255)+p(q&255)+i
})(o),k="",f="",b=this._blockGen(r,true),a=this._blockGen(n,true);f=encoding.b2a(((o==""?0:1)<<6)|(((d-2)>>1)<<3)|(m-1))+g;
for(h=15-f.length;h>=0;h--){f+=encoding.b2a(h>3?0:e>>>8*h)}l=this._aes(this._blockGen(f,true).gen(),false);
if(!!n){for(h=0;h<a.blocks;h++){l=this._aes(j(l,a.gen()),false)}}for(h=0;h<b.blocks;
h++){l=this._aes(j(l,b.gen()),false)}f=this._output(l,false);for(h=0;h<f.length;h++){k+=f[h];
if(h+1==d){break}}return k},_ctrMode:function(q,f,r,e,o){var b=this._blockGen(encoding.b2a(o-1)+f,true).gen(),p=r,k=this._xor4,m="",a=this._blockGen(q,true),d=q.length,r=k(this._blockGen(r,true).gen(),this._aes(b,false)),l="",h=0,n="",g=0;
n=this._output(r,false);for(h=0;h<n.length;h++){l+=n[h];if(h+1==e){break}}for(h=0;
h<a.blocks;h++){b[3]++;n=this._output(k(a.gen(),this._aes(b,false)),false);for(g=0;
g<n.length;g++){m+=n[g];if(m.length==d){break}}}return{tag:l,data:m}}};var DJSON={stringify:function s(g,d){var a=d.props,k="",h=0,f=0,b="",c=0,e=function(j,i){return j<i?j:i
};switch(d.type){case"object":k="{";for(h=0;h<a.length;h++){b=a[h].name;k+='"'+b+'":'+s(g[b],a[h].value);
if(h!=a.length-1){k+=","}}return k+"}";break;case"array":for(f=0;f<a.length;f++){for(h=0,k="[",c=e(g.length,+(a[f].name)|0);
h<c;h++){k+=s(g[h],a[f].value);if(h!=c-1){k+=","}}return k+"]"}return"[]";break;case"string":for(h=0,k='"';
h<g.length;h++){if(g[h]=="\\"||g[h]=='"'){k+="\\"}k+=g[h]}return k+'"';break;case"number":return g+"";
break;case"boolean":return g?"true":"false";break}},parse:function(o,g,c){var f=-1,b=o.length;
var j="",m=0,h=false;var d=function(n,e){return n<e?n:e};var l=function(e){switch(e){case" ":case"\t":case"\r":case"\n":return true
}return false};var k=function a(e,p){var w=0,n="",r=0,q=0,v="",t=false,u=[];switch(p.type){case"object":u=p.props;
w=0;r=0;while(f++<b){v=o[f];switch(w){case 0:if(v=="{"){w=1}else{if(l(v)){continue
}else{throw false}}break;case 1:if(l(v)){continue}if(r>=u.length&&v=="}"){return}f--;
a({},{type:"string",props:[]});if(j!=u[r].name){throw false}w=2;break;case 2:if(l(v)){continue
}else{if(v==":"){w=3}else{throw false}}break;case 3:if(l(v)){continue}f--;a(e[u[r].name],u[r].value);
switch(u[r].value.type){case"string":e[u[r].name]=j;break;case"number":e[u[r].name]=m;
break;case"boolean":e[u[r].name]=h;break}w=4;break;case 4:if(l(v)){continue}if(++r==u.length){if(v=="}"){return
}else{throw false}}else{if(v==","){w=1}else{throw false}}break}}throw false;break;
case"array":u=p.props;if(!u.length||!((q=+u[0].name)>0)){throw false}w=0;r=0;q=d(q,e.length);
while(f++<b){v=o[f];switch(w){case 0:if(v=="["){w=1}else{throw false}break;case 1:if(v==" "){continue
}if(v=="]"){return}f--;a(e[r],u[0].value);switch(u[0].value.type){case"string":e[r]=j;
break;case"number":e[r]=m;break;case"boolean":e[r]=h;break}w=2;break;case 2:if(v==" "){continue
}if(v=="]"){return}if(++r<q&&v==","){w=1}else{throw false}break}}throw false;break;
case"string":w=0;while(f++<b){v=o[f];switch(w){case 0:if(v=='"'){j="";w=1}else{throw false
}break;case 1:if(v=="\\"){w=2}else{if(v=='"'){return}else{j+=v}}break;case 2:if(v=="n"){j+="\n"
}else{if(v=="t"){j+="\t"}else{if(v=="b"){j+="\b"}else{if(v=="r"){j+="\r"}else{if(v=="u"){w=3
}else{j+=v}}}}}if(w==2){w--}break;case 3:n+=v;if(n.length==4){r=+n;if(r==0/0){throw false
}j+=encoding.fromCharCode(r);w=1}break}}throw false;break;case"number":n="";while(f++<b){v=o[f];
switch(v){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case"+":case"-":case"e":case"E":case".":n+=v;
continue}f--;break}r=+n;if(n==""||r+1==r){throw false}m=r;break;case"boolean":n="";
while(f++<b){n+=o[f];if(n=="true"){h=true;return}else{if(n=="false"){h=false;return
}}if(n.length>=5){throw false}}throw false;break}};try{k(g,c);return true}catch(i){return false
}}};var BigInteger={BI_DB:28,BI_DM:268435455,BI_DV:268435456,BI_FP:52,BI_FV:4503599627370496,BI_F1:24,BI_F2:4,create:function(l){var d=false,c="",h="",m=l+"",f=m.length,e=0,k=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],g={array:k,t:0,s:0};
while(--f>=0){h=(f>>>=0)<m.length?m[f]:"0";if(f==0&&h=="-"){d=true;continue}c=h+c;
if(e++%7==6){k[g.t++&255]=+("0x"+c);c=""}}if(!!c){k[g.t++&255]=+("0x"+c)}c="";if(d){g=this.negate(g)
}this.clamp(g);return g},am:function(d,o,y,z,k,r,e){var v=d.array,u=z.array,g=0,f=0,q=y&16383,t=y>>14,p=0;
while(--e>=0){g=v[o&255]&16383;o;p=v[o++&255]>>14;f=t*g+p*q;g=q*g+((f&16383)<<14)+u[k&255]+r;
r=(g>>28)+(f>>14)+t*p;u[k++&255]=g&268435455}return r},copyTo:function(d,c){var a=d.array,e=c.array,b=0;
for(b=d.t-1;b>=0;--b){e[b&255]=a[b&255]}c.t=d.t;c.s=d.s;return c},clamp:function(d){var b=d.array,e=d.s&this.BI_DM;
while(d.t>0&&b[(d.t-1)&255]==e){--d.t}},toString:function(b){var p=b.array,o=0,l=0,f=0,d=encoding.hex,e=0,g=false,m="",n="";
if(b.s<0){return"-"+this.toString(this.negate(b))}for(l=b.t-1;l>=0;l--){o=p[l&255];
for(f=24;f>=0;f-=4){e=(o>>f)&15;m=(e>>>=0)<d.length?d[e]:"0";if(m!="0"){g=true}if(g){n+=m
}}}return !n?"0":n},negate:function(b){var a=this.create("0"),c=this.create("0");
this.subTo(c,b,a);return a},abs:function(a){return a.s<0?this.negate(a):a},xor:function(f,c){var b=f.array,h=c.array,e=this.create("0"),g=e.array,d=(f.t>c.t)?f.t:c.t;
e.t=d;while(--d>=0){g[d&255]=b[d&255]^h[d&255]}return e},compareTo:function(g,c){var b=g.array,h=c.array,d=g.t,f=g.s-c.s,e=g.t-c.t;
if(!!f){return f}if(!!e){return e}while(--d>=0){if((f=(b[d&255]-h[d&255]))!=0){return f
}}return 0},nbits:function(a){var c=1,b=0;if((b=a>>>16)!=0){a=b;c+=16}if((b=a>>8)!=0){a=b;
c+=8}if((b=a>>4)!=0){a=b;c+=4}if((b=a>>2)!=0){a=b;c+=2}if((b=a>>1)!=0){a=b;c+=1}return c
},bitLength:function(c){var b=c.array;if(c.t<=0){return 0}return this.BI_DB*(c.t-1)+this.nbits(b[(c.t-1)&255]^(c.s&this.BI_DM))
},DLshiftTo:function(g,h,f){var d=g.array,c=f.array,e=0;for(e=g.t-1;e>=0;--e){c[(e+h)&255]=d[e&255]
}for(e=h-1;e>=0;--e){c[e&255]=0}f.t=g.t+h;f.s=g.s},DRshiftTo:function(g,h,f){var d=g.array,c=f.array,e=0;
for(e=h;e<g.t;++e){c[(e-h)&255]=d[e&255]}f.t=g.t>h?g.t-h:0;f.s=g.s},LshiftTo:function(e,h,d){var o=e.array,m=d.array,p=h%this.BI_DB,k=this.BI_DB-p,f=(1<<k)-1,g=(h/this.BI_DB)|0,l=(e.s<<p)&this.BI_DM,j=0;
for(j=e.t-1;j>=0;--j){m[(j+g+1)&255]=(o[j&255]>>k)|l,l=(o[j&255]&f)<<p}for(j=g-1;
j>=0;--j){m[j&255]=0}m[g&255]=l;d.t=e.t+g+1;d.s=e.s;this.clamp(d)},RshiftTo:function(d,g,c){var l=d.array,k=c.array,h=0,m=g%this.BI_DB,j=this.BI_DB-m,e=(1<<m)-1,f=(g/this.BI_DB)|0;
c.s=d.s;if(f>=d.t){c.t=0;return}k[0]=l[f&255]>>m;for(h=f+1;h<d.t;++h){k[(h-f-1)&255]|=(l[h&255]&e)<<j,k[(h-f)&255]=l[h&255]>>m
}if(m>0){k[(d.t-f-1)&255]|=(d.s&e)<<j}c.t=d.t-f;this.clamp(c)},subTo:function(e,k,d){var n=e.array,j=d.array,l=k.array,g=0,h=0,f=k.t<e.t?k.t:e.t;
while(g<f){h+=n[g&255]-l[g&255];j[g++&255]=h&this.BI_DM;h>>=this.BI_DB}if(k.t<e.t){h-=k.s;
while(g<e.t){h+=n[g&255];j[g++&255]=h&this.BI_DM;h>>=this.BI_DB}h+=e.s}else{h+=e.s;
while(g<k.t){h-=l[g&255];j[g++&255]=h&this.BI_DM;h>>=this.BI_DB}h-=k.s}d.s=(h<0)?-1:0;
if(h<-1){j[g++&255]=this.BI_DV+h}else{if(h>0){j[g++&255]=h}}d.t=g;this.clamp(d)},multiplyTo:function(c,f,b){var k=c.array,j=b.array,g=this.abs(c),e=this.abs(f),h=e.array,d=g.t;
b.t=d+e.t;while(--d>=0){j[d&255]=0}for(d=0;d<e.t;++d){j[(d+g.t)&255]=this.am(g,0,h[d&255],b,d,0,g.t)
}b.s=0;this.clamp(b);if(c.s!=f.s){this.subTo(this.create("0"),b,b)}},squareTo:function(g,f){var a=this.abs(g),d=a.array,b=f.array,e=(f.t=2*a.t),h=0;
while(--e>=0){b[e&255]=0}for(e=0;e<a.t-1;++e){h=this.am(a,e,d[e&255],f,2*e,0,1);if((b[(e+a.t)&255]+=this.am(a,e+1,2*d[e&255],f,2*e+1,h,a.t-e-1))>=this.BI_DV){b[(e+a.t)&255]-=this.BI_DV,b[(e+a.t+1)&255]=1
}}if(f.t>0){b[(f.t-1)&255]+=this.am(a,e,d[e&255],f,2*e,0,1)}f.s=0;this.clamp(f)},divRem:function(f,o){var w=this.abs(o),n=this.abs(f),a=w.array,l=f.array,b=f.s,v=w.s,D=this.BI_DB-this.nbits(a[(w.t-1)&255]),u=this.create("0"),p=this.create("0"),h=u.array,B=p.array,g=0,k=this.create("0"),c=k.array,A=0,d=0,x=0,C=0,z=0,G=0,F=0,E=0;
if(n.t<w.t){this.copyTo(f,p)}if(!w.t||n.t<w.t){return[u,p]}if(D>0){this.LshiftTo(w,D,k);
this.LshiftTo(n,D,p)}else{this.copyTo(w,k);this.copyTo(w,p)}A=k.t;d=c[(A-1)&255];
if(d==0){return[u,p]}x=d*(1<<this.BI_F1)+((A>1)?c[(A-2)&255]>>this.BI_F2:0);G=this.BI_FV/x,F=(1<<this.BI_F1)/x,E=1<<this.BI_F2;
C=p.t,z=C-A;this.DLshiftTo(k,z,u);if(this.compareTo(p,u)>=0){B[p.t++&255]=1;this.subTo(p,u,p)
}this.DLshiftTo(this.create("1"),A,u);this.subTo(u,k,k);while(k.t<A){c[k.t++&255]=0
}while(--z>=0){g=(B[--C&255]==d)?this.BI_DM:(B[C&255]*G+(B[(C-1)&255]+E)*F)|0;if((B[C&255]+=this.am(k,0,g,p,z,0,A))<g){this.DLshiftTo(k,z,u);
this.subTo(p,u,p);while(B[C&255]<--g){this.subTo(p,u,p)}}}this.DRshiftTo(p,A,u);if(b!=v){this.subTo(this.create("0"),u,u)
}p.t=A;this.clamp(p);if(D>0){this.RshiftTo(p,D,p)}if(b<0){this.subTo(this.create("0"),p,p)
}return[u,p]},mod:function(d,b){var c=this.divRem(this.abs(d),b)[1];if(d.s<0&&this.compareTo(c,this.create("0"))>0){this.subTo(b,c,c)
}return c},invDigit:function(d){var c=d.array,b=c[0],e=b&3;if(d.t<1||!(b&1)){return 0
}e=(e*(2-(b&15)*e))&15;e=(e*(2-(b&255)*e))&255;e=(e*(2-(((b&65535)*e)&65535)))&65535;
e=(e*(2-b*e%this.BI_DV))%this.BI_DV;return(e>0)?this.BI_DV-e:-e},expMod:function(b,l,d){var a=this.create("1"),c=this.create("0"),n=l.array[(l.t-1)&255],k=this.Mconvert(b,d),h=this.bitLength(l)-1,f=0,o=a;
if(this.compareTo(l,a)<0){return a}this.copyTo(k,a);while(--h>=0){f=h%this.BI_DB;
this.squareTo(a,c);this.Mreduce(c,d);if((n&(1<<f))!=0){this.multiplyTo(c,k,a);this.Mreduce(a,d)
}else{o=a;a=c;c=o}if(!f){n=l.array[(h/this.BI_DB-1)&255]}}return this.Mrevert(a,d)
},Mconvert:function(d,a){var b=this.create("0"),c=(this.DLshiftTo(this.abs(d),a.t,b),this.divRem(b,a))[1];
if(d.s<0&&this.compareTo(c,this.create("0"))>0){this.subTo(a,c,c)}return c},Mreduce:function(c,h){var f=this.invDigit(h),b=f&32767,g=f>>15,o=c.array,n=(1<<(this.BI_DB-15))-1,d=2*h.t,l=0,k=0,e=0;
while(c.t<=d){o[c.t++&255]=0}for(l=0;l<h.t;++l){k=o[l&255]&32767;e=(k*b+(((k*g+(o[l&255]>>15)*b)&n)<<15))&this.BI_DM;
k=l+h.t;o[k&255]+=this.am(h,0,e,c,l,0,h.t);while(o[k&255]>=this.BI_DV){o[k&255]-=this.BI_DV;
o[++k&255]++}}this.clamp(c);this.DRshiftTo(c,h.t,c);if(this.compareTo(c,h)>=0){this.subTo(c,h,c)
}return c},Mrevert:function(b,a){var d=this.create("0");this.copyTo(b,d);return this.Mreduce(d,a)
}};var rsa={label:"",salt:"",encryption_hash:hashing.sha256,mgf_hash:hashing.sha256,signature_hash:hashing.sha256,error_code:0,encrypt:function(u,f){var d=encoding.astr2hstr(u)+"",e=d.length>>1,p=BigInteger.create(f.n+""),t=BigInteger.create(f.e+""),o=this.encryption_hash,a=BigInteger.bitLength(p)>>3,g=0,k="",c="",b="",r=o.size,q=this.label+"",j=encoding.astr2hstr(o.hash(u+q));
if(a-2*r-2<e){this.error_code=1;return""}for(g=0;g<a-2*r-2-e;g++){c+="00"}k=encoding.astr2hstr(o.hash(q))+c+"01"+d;
c=this.MGF(j,a-r-1);k=BigInteger.toString(BigInteger.xor(BigInteger.create(k),BigInteger.create(c)));
if(!!(k.length&1)){k="0"+k}b=BigInteger.toString(BigInteger.xor(BigInteger.create(j),BigInteger.create(this.MGF(k,r))));
k=BigInteger.toString(BigInteger.expMod(BigInteger.create(b+k),t,p));if(!!(k.length&1)){k="0"+k
}this.error_code=0;return k},_private:function(i,g){var a=BigInteger.create(i),f=BigInteger.create(g.dmp1),e=BigInteger.create(g.dmq1),c=BigInteger.create(g.p),b=BigInteger.create(g.q),h=BigInteger.create(g.iqmp),d=BigInteger.create("0");
f=BigInteger.expMod(a,f,c);e=BigInteger.expMod(a,e,b);BigInteger.subTo(f,e,d);BigInteger.multiplyTo(d,h,a);
BigInteger.multiplyTo(b,BigInteger.mod(a,c),d);BigInteger.subTo(e,BigInteger.negate(d),a);
return BigInteger.toString(a)},decrypt:function(r,q){var d=r+"",e=d.length>>1,a=BigInteger.bitLength(BigInteger.create(q.n+""))>>3,o=false,k="",c="",b="",g=0,j=this.encryption_hash,p=j.size;
if(a!=e){this.error_code=2;return""}k=this._private(d,q);for(g=(a<<1)-k.length;g>0;
g--){k="0"+k}for(g=0;g<k.length;g++){if(g<2){if(k[g]!="0"){this.error_code=3;return""
}}else{if(g<2*(p+1)){c+=k[g]}else{b+=k[g]}}}k=this.MGF(b,p);c=BigInteger.toString(BigInteger.xor(BigInteger.create(c),BigInteger.create(k)));
k=this.MGF(c,a-p-1);k=BigInteger.toString(BigInteger.xor(BigInteger.create(b),BigInteger.create(k)));
if(!!(k.length&1)){k="0"+k}d="";o=false;c="";for(g=0;g<k.length;g++){if(g<2*p){c+=k[g];
continue}b=k[g];if(o){d+=b}else{if(b=="1"){if(!(g&1)){break}else{o=true}}else{if(b!="0"){break
}}}}if(!c){this.error_code=4;return""}if(c!=encoding.astr2hstr(j.hash(this.label))){this.error_code=5;
return""}this.error_code=0;return encoding.hstr2astr(d)},sign:function(p,o){var g=this.signature_hash,d=g.hash(p+""),k="",b="",c="",j=this.salt+"",e=j.length,f=0,l=g.size,a=BigInteger.bitLength(BigInteger.create(o.n+""))>>3;
if(a-l-2<e){this.error_code=6;return""}d=encoding.astr2hstr(g.hash("\x00\x00\x00\x00\x00\x00\x00\x00"+d+j));
b="01"+encoding.astr2hstr(j);for(f=b.length>>1;f<a-e-l-2;f++){c+="00"}k=this.MGF(d,a-l-1);
b=(+("0x"+(0<k.length?k[0]:"0"))>>3==0?"00":"80")+c+b;k=BigInteger.toString(BigInteger.xor(BigInteger.create(k),BigInteger.create(b)));
k+=d+"bc";k=this._private(k,o);if(!!(k.length&1)){k="0"+k}this.error_code=0;return k
},_pkcs1_sig_pad:function(a,f){var d=this.signature_hash,a=d.hash(a+""),c="",e="",b=0;
a="04"+encoding.b2h(d.size)+encoding.astr2hstr(a);c=d.identifier+"";c="06"+encoding.b2h(c.length>>1)+c+"0500";
c="30"+encoding.b2h(c.length>>1)+c+a;c="0030"+encoding.b2h(c.length>>1)+c;for(b=c.length>>1;
b<f-2;b++){e+="ff"}return"0001"+e+c},sign_pkcs1_v1_5:function(c,a){var b="",d=BigInteger.bitLength(BigInteger.create(a.n+""))>>3;
b=this._private(this._pkcs1_sig_pad(c,d),a);if(!!(b.length&1)){b="0"+b}this.error_code=0;
return b},verify:function(o,b,j){var q=this.signature_hash,u=q.size,e=q.hash(o+""),w=b+"",t=BigInteger.create(j.n+""),g=w.length>>1,v=BigInteger.create(j.e+""),a=BigInteger.bitLength(t)>>3,l=0,p="",d="",c="",r=false;
if(g!=a){this.error_code=2;return false}w=BigInteger.toString(BigInteger.expMod(BigInteger.create(w),v,t));
while(w.length!=2*a){w="0"+w}if(+(0<w.length?w[0]:"0")>>3!=0){this.error_code=3;return false
}for(l=0;l<w.length;l++){if(l<2*(a-u-1)){p+=w[l]}else{if(l<2*(a-1)){d+=w[l]}else{c+=w[l]
}}}if(c!="bc"){this.error_code=7;return false}w=d;d=this.MGF(d,a-u-1);p=BigInteger.toString(BigInteger.xor(BigInteger.create(p),BigInteger.create(d)));
if(!!(p.length&1)){p="0"+p}d="";for(l=0;l<p.length;l++){c=p[l];if(!l){if(c!="0"&&c!="8"){return false
}}else{if(r){d+=c}else{if(c=="1"&&!!(l&1)){r=true;continue}if(c!="0"){this.error_code=4;
return false}}}}d=encoding.hstr2astr(d);this.error_code=0;return encoding.astr2hstr(q.hash("\x00\x00\x00\x00\x00\x00\x00\x00"+e+d))==w
},verify_pkcs1_v1_5:function(e,b,d){var f=BigInteger.create(d.n+""),h=BigInteger.create(d.e+""),i=b+"",c=i.length>>1,a=BigInteger.bitLength(f)>>3,g=this._pkcs1_sig_pad(e,a);
if(c!=a){this.error_code=2;return false}i=BigInteger.toString(BigInteger.expMod(BigInteger.create(i),h,f));
while(i.length!=2*a){i="0"+i}return i==g},MGF:function(g,a){var l="",m="",e=0,d=0,f=this.mgf_hash,k=a<<1,o=f.size,b=(a/o|0)+(!(a%o)?0:1);
for(e=0;e<b;e++){for(m="",d=0;d<4;d++){m+=encoding.b2h((e>>(24-8*d))&255)}m=encoding.astr2hstr(f.hash(encoding.hstr2astr(g+m)));
for(d=0;d<m.length;d++){l+=m[d];if(l.length==k){return l}}}return l}};