  var cm, cm1, cm2, cm3, cm4;
  window.addEventListener('load', function()
  {
   cm = CodeMirror.fromTextArea(document.getElementById('jsi'),
    {lineNumbers: true, mode: "javascript"});
   cm1 = CodeMirror.fromTextArea(document.getElementById('ejs'),
    {lineNumbers: true, mode: "javascript"});
   cm3 = CodeMirror.fromTextArea(document.getElementById('ds'),
    {lineNumbers: true, mode: "javascript"});
   cm4 = CodeMirror.fromTextArea(document.getElementById('ds2'),
    {lineNumbers: true, mode: "javascript"});
   cm2 = CodeMirror.fromTextArea(document.getElementById('ephp'),{
        lineNumbers: true,
        matchBrackets: true,
        mode: "application/x-httpd-php",
        indentUnit: 4,
        indentWithTabs: true,
        enterMode: "keep",
        tabMode: "shift"
    });
  });

  var xhr = new XMLHttpRequest();

function regorigin(o)
{
 xhr.open('GET', '/dss.php?pkurl='+o);
 xhr.onload = function()
 {
  alert(xhr.responseText);
 }
 xhr.send();
}

  function typecheck()
  {
   xhr.open('POST','/');

   var pp = (document.getElementById('pp').checked?'0':
    (document.getElementById('pv').checked?'2':'1'));

   if(pp != 2)
    document.getElementById('res').value = "Running...";

   var cl = document.getElementById('cl').checked?'&closed=1':'';
   var sub = document.getElementById('sc').checked?'&sub=1':'';
   var verb = document.getElementById('vc').checked?'&verb=1':'';
   var params = "input="+encodeURIComponent(cm.getValue())+"&type="+pp+cl+sub+verb;
   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

   if(!+pp)
   {
    xhr.onload = function()
    {
     if(/at File ".jsdef", line [0-9]+, character [0-9]+$/.test(xhr.responseText.split("\n")[0]))
     {
      document.getElementById('res').value = xhr.responseText;
     }
     else
     {
      document.getElementById('res').value = 'Pretty Print complete';
      cm.setValue(xhr.responseText);
     }
    }
   }
   else
    xhr.onload = function(){ document.getElementById('res').value = xhr.responseText;};

   xhr.send(params);
  }

var cat = [];
var ex = [];

var cs, es;
window.addEventListener('load', function()
{
 cs = document.getElementById('cat');
 es = document.getElementById('ex');
 for(i=0; i<cat.length; i++)
 {
  cs.options.add(new Option(cat[i], i));
 }
 catchange(0);
});

function catchange(j)
{
 es.options.length = 0;
 for(var t = ex[j], i=0; i<t.length; i++)
 {
  es.options.add(new Option(t[i], i));
 }
}

function loadex()
{
 var u = cs.value, v = es.value;
 xhr.open("GET", x="/examples/"+cat[u]+"/"+ex[u][v]);
 xhr.onload = function(){ cm.setValue(xhr.responseText);}
 xhr.send();
}

var atab = "intro";
function tab(id)
{
 $('#'+atab).toggle();
 $('#'+id).toggle();
 atab = id;

 cm.refresh();
 cm1.refresh();
 cm2.refresh();
 cm3.refresh();
 cm4.refresh();

 return void(0);
}

function register()
{
 var o = document.getElementById('org').value.toLowerCase();
 var ds = JSON.stringify({d: cm3.getValue(), o: cm4.getValue()});
 var priv = parsePK(document.getElementById('priv').value);

 rsa.signature_hash = hashing.sha1;
 var sig = rsa.sign_pkcs1_v1_5(ds, priv);

 if(!sig){alert('Invalid private key'); return}
 if(!o){alert('Invalid origin'); return}
 var uid = +document.getElementById('uid').value;
 var u = +document.getElementById('utf8').checked;
 var o = JSON.stringify({origin:o, script: ds, signature: sig, update:uid, utf8:u});

 var xhr = new XMLHttpRequest();
 xhr.open('POST','dss.php');
 xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 xhr.onload = function(){alert(this.responseText)}
 xhr.send("addscript="+encodeURIComponent(o));
}

function time()
{
 var s = document.createElement('script');
 s.async = true; s.type = "text/javascript";
 s.src = 'https://dss.defensivejs.com/?script=1';
 document.head.appendChild(s);
}


