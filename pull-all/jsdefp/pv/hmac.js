
_lib.spec("event Send(String)");
_lib.spec("event Accept(String,String,Boolean)");
_lib.spec("event Leaked(String,Boolean)");
_lib.spec("query x:String; event(Leaked(x,bool_true()))"); // Is the MAC key leaked?
_lib.spec("query x:String; event(Send(x))"); // Can a MAC be created?
_lib.spec("query x:String,y:String; event(Accept(x,y,bool_true()))"); // Is a MAC ever accepted?
_lib.spec("query x:String,y:String; event(Accept(x,y,bool_true())) ==> event(Send(x))");

x = (function()
{
  var mac_key = _lib.secret("xxx");

  var mac = function (x) {
    _lib.event(_lib.Send(x));
    return _lib.hmac(x, mac_key);
  }

  var verify = function (x,t) {
    var res = _lib.hmac(x, mac_key) === t;
    _lib.event(_lib.Accept(x,t,res));
    return res ? "yes" : "no";
  }
  
  var guess = function (k) {
    var res = k == mac_key;
    _lib.event(_lib.Leaked(k,res));
    return res ? "yes" : "no";
  }

  var _ = function(s)
  {
   var o = _lib.DJSON_parse(s, {t: "", h: ""});

   return (o.t == "" ?  guess(o.h) :
          (o.h == "" ?  mac(o.t) :
           verify(o.t, o.h)));
  }

//oops = mac_key; // Uncomment to leak the MAC key

  return function(s){if(typeof s=="string") return _(s)};
})();

