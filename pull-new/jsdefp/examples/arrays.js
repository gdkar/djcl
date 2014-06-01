(function()
{
 var a = function(x){return x[3];};
 var b = [1,2,3,4];
 a(b);
 a = function(x){return x[4]; };
 a(b); // Out of bound
})();
