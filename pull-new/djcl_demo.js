(function(){

var $ = function(s){return document.getElementById(s)}
var $$ = function(s){return document.querySelectorAll(s)}

window.addEventListener('load', function()
{
 var t = $$('.encsel');
 for(var i=0; i<t.length; i++) encSel(t[i].id, false);
 for(t = $$('.decsel'), i=0; i<t.length; i++) encSel(t[i].id, true);
 $('kie').selectedIndex = $('iie').selectedIndex = $('hoe').selectedIndex = 2;
 crypt(); hash(); loadpk(); rsas();
});

window.decode = function decode(s, type)
{
 switch(+type)
 {
  case 1: return encoding.utf8_decode(s);
  case 2: return encoding.hstr2astr(s);
  case 3: return encoding.base64_decode(s);
  default: return s;
 }
}

window.encode = function encode(s, type)
{
 switch(+type)
 {
  case 1: return encoding.utf8_encode(s);
  case 2: return encoding.astr2hstr(s);
  case 3: return encoding.base64_encode(s);
  case 4: return encoding.base64_urlencode(s);
  default: return s;
 }
}

window.enc = function enc()
{
 var i = decode($('ein').value, $('eie').value);
 $('eout').value = encode(i, $('eoe').value);
}

window.swapenc = function swapenc()
{
 var i = $('eie').selectedIndex, j = $('eoe').selectedIndex;
 $('eie').selectedIndex = (j==4?3:j); $('eoe').selectedIndex = i;
 i = $('ein').value; j = $('eout').value;
 $('ein').value = j; $('eout').value = i;
 enc();
}

window.hash = function hash()
{
 var i = decode($('hin').value, $('hie').value);
 var k = decode($('mk').value, $('mke').value), h;
 if($('hmac').checked)
 {
  hashing.hmac_hash = $('hf').selectedIndex ? hashing.sha1 : hashing.sha256;
  $('hout').value = encode(encoding.hstr2astr(hashing.HMAC(k,i)), $('hoe').selectedIndex);
 }
 else
 {
  h = ($('hf').selectedIndex ? hashing.sha1.hash(i) : hashing.sha256.hash(i));
  $('hout').value = encode(h, $('hoe').selectedIndex);
 }
}

window.rnd = function rnd(n, tid, eid)
{
 for(var x='', i=0; i<n; i++)
  x += encoding.b2a((Math.random()*0x100)&255);
 $(tid).value = encode(x, $(eid).selectedIndex);
 crypt();
}

window.crypt = function crypt()
{
 var dir = $('decr').checked;
 var k = decode($('key').value, $('kie').selectedIndex);
 aes.setKey(k);
 var data = decode($('cin').value, $('cie').selectedIndex);
 var iv = decode($('iv').value, $('iie').selectedIndex);
 var mode = $('ccm').checked;

 $('cout').className = "";

 if(mode)
 {
  var ad = decode($('ad').value, $('aie').selectedIndex);

  if(dir)
  {
   var r = aes.CCM_decrypt(data, iv, ad, $('tl').value);
   $('cout').className = r.valid ? 'aok' : 'abad';
   $('cout').value = r.valid ? encode(r.data, $('coe').selectedIndex) : "AUTHENTICATION FAILED";
  }
  else
  {
   $('cout').value = encode(aes.CCM_encrypt(data, iv, ad, $('tl').value), $('coe').selectedIndex);
  }
 }
 else
 {
  $('cout').value = encode(aes.CBC(data, iv, dir), $('coe').selectedIndex);
 }
}

window.swapc = function swapc()
{
 var i = $('cie').selectedIndex, j = $('coe').selectedIndex;
 $('cie').selectedIndex = (j==4?3:j); $('coe').selectedIndex = i;
 i = $('cin').value; j = $('cout').value;
 $('cin').value = j; $('cout').value = i;
 crypt();
}

window.setpkf = function setpkf()
{
 for(i in pk)
 {
  if($('pk'+i)) $('pk'+i).value = pk[i];
 }
 rsae();
}

window.loadpk = function loadpk()
{
 try
 {
  pk = parsePK($('pk').value);
 }
 catch(e){return}
 setpkf();
}

window.rsae = function rsae()
{
 var l = decode($('lbl').value, $('relie').selectedIndex);
 rsa.label = l;
 var dir = $('red').checked;
 var sha1 = $('reh').value == '0';
 rsa.encryption_hash = sha1 ? hashing.sha1 : hashing.sha256;
 rsa.mgf_hash = sha1 ? hashing.sha1 : hashing.sha256;
 var d = decode($('rein').value, $('reie').selectedIndex);

 $('reout').className = "";
 if(dir)
 {
  $('reout').value = encode(rsa.decrypt(encoding.astr2hstr(d), pk), $('reoe').selectedIndex);
  $('reout').className = !rsa.error_code ? 'aok' : 'abad';
 }
 else
 {
  var e = encode(encoding.hstr2astr(rsa.encrypt(d, pk)), $('reoe').selectedIndex);
  $('reout').value = e ? e : "INPUT TOO LONG";
 }
}

window.rsas = function rsas()
{
 var data = decode($('rsin').value, $('rsie').selectedIndex);
 var mode = $('rspss').checked;
 var jwt = $('rsjwt').checked;
 var dir = $('rsv').checked;
 var salt = decode($('rssalt').value, $('rssie').selectedIndex);
 var h = $('rsh').selectedIndex;
 rsa.signature_hash = h ? hashing.sha256 : hashing.sha1;
 rsa.mgf_hash = h ? hashing.sha256 : hashing.sha1;
 rsa.salt = salt;
 $('rsin').className = '';

 if(jwt)
 {
  JWT.algorithm = "RS256";
  if(dir)
  {
   h = JWT.parse($('rsout').value, pk);
   $('rsin').className = h.valid ? "aok" : "abad";
   $('rsin').value = h.claims;
  }
  else
  {
   $('rsout').value = JWT.create(data, pk);
  }
  return;
 }

 if(dir)
 {
  h = decode($('rsout').value, $('rsoe').selectedIndex);
  h = encoding.astr2hstr(h);
  var b = mode ? rsa.verify(data, h, pk) : rsa.verify_pkcs1_v1_5(data, 	h, pk);
  $('rsin').className = b ? "aok" : "abad";
 }
 else
 {
  h = mode ? rsa.sign(data, pk) : rsa.sign_pkcs1_v1_5(data, pk);
  $('rsout').value = encode(encoding.hstr2astr(h), $('rsoe').selectedIndex);
 }
}

window.swapre = function swapre()
{
 var i = $('reie').selectedIndex, j = $('reoe').selectedIndex;
 $('reie').selectedIndex = (j==4?3:j); $('reoe').selectedIndex = i;
 i = $('rein').value; j = $('reout').value;
 $('rein').value = j; $('reout').value = i;
 rsae();
}

window.swaprs = function swaprs()
{
 $('rsout').disabled = $('rss').checked;
 rsas();
}

window.encSel = function encSel(id, dec)
{
 var o = $(id).options;
 o.add(new Option('ASCII', 0));
 o.add(new Option('Unicode', 1));
 o.add(new Option('Hexadecimal', 2));
 o.add(new Option('Base64', 3));
 if(dec) o.add(new Option('Base64 (url safe)', 4));
 o.selectedIndex = dec ? 3 : 1;
}

})();
