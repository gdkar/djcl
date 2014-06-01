result = function(){
 var a=function(x){return x};
 var b=function(x){return a(x)}; 
 b(true); b(1);
 a = function(x){return x+1};
 b(true); b(1);
}
