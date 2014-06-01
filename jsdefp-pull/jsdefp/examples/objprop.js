R = (function(){
 var f = function(x){return x.a+x.b},
  g = function(x,y){return f(x)+f(y)},
  o1 = {a:0, b:1, c:2},
  o2 = {a:1, b:3, d:3},
  a = function(x){ return g(x.fst, x.snd); };

 return a({fst: o1, snd: o2});
})
