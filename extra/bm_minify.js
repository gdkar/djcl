with({O:"https://lp.com",DJS:function(){var i="85214b9e25a7a8a6715076c49dc376b0",b="0123456789abcdef",h=function(k){return +("0x"+k)|0},c=function(k){return(k>>>=0)<b.length?b[k]:"0"},a=function(x,v){var u=x[0],t=x[1],s=x[2],r=x[3],q=x[4],o=0,l=[1518500249,1859775393,2400959708,3395469782],m=function(y,k){return(k<<y)|(k>>>32-y)},n=0,p=function(y,k,A,z){if(y<20){return(k&A)|(~k&z)}if(y<40){return k^A^z}if(y<60){return(k&A)|(k&z)|(A&z)}return k^A^z};for(o=0;o<80;o++){if(o>=16){v[o&127]=m(1,v[(o-3)&127]^v[(o-8)&127]^v[(o-14)&127]^v[(o-16)&127])}n=(m(5,u)+p(o,t,s,r)+q+v[o&127]+l[(o/20)&3])|0;q=r;r=s;s=m(30,t);t=u;u=n}x[0]=(x[0]+u)|0;x[1]=(x[1]+t)|0;x[2]=(x[2]+s)|0;x[3]=(x[3]+r)|0;x[4]=(x[4]+q)|0},f=function(t){var n=(t+="80").length>>1,k=n>>6,p=n&63,o="",m=0,l=0,r=[1732584193,4023233417,2562383102,271733878,3285377520],q=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];while(p++!=56){t+="00";if(p==64){k++;p=0}}for(t+="00000000",p=7,n=8*(n-1);p>=0;p--){t+=c(n>>(4*p)&15)}for(m=0;m<t.length;m++){o+=t[m];if((m&7)==7){q[(m>>3)&15]=h(o);o=""}if((m&127)==127){a(r,q)}}o="";for(m=0;m<r.length;m++){for(l=7;l>=0;l--){o+=c(r[m]>>(4*l)&15)}}return o},e=function(n,o){var n=n+"",o=o+"",m=0,p=0,k="",l="";if(n.length>128){n=f(n)}while(n.length<128){n+="0"}for(m=0;m<n.length;m++){p=h(n[m]);k+=c(p^(3<<(m%2)));l+=c(p^(5+7*(m%2)))}return f(l+f(k+o))},j=0,g=function(k){return !j++?e(i,k):""};return(function(k){if(typeof k=="string"){return g(k)}})}(),d:document,w:window}){w.addEventListener("message",function(a){if(a.origin==O){a.source.postMessage(DJS(a.data),a.origin)}});+function(){var a=d.createElement("iframe");a.src=O+"/bm";d.body.appendChild(a)}()};