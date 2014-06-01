a = function(x){return x+''};
b = {toString:function(){return "ok"},valueOf:function(){return 0}};
c = a(b);
d = +b;
