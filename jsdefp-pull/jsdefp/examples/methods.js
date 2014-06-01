with({
 a: function(i)
 {
  if(i==0)
   return 0
  else
   return this.b(i-1)+1
 },
 b: function(i)
 {
  if(i==0)
   return this.c;
  else
   return this.a(i-1)*2
 },
 c:2,
 d: function(i,j){return this.c+i+j}
})
{
// d=function(i,j){return a(i)/b(j)};
 d=function(i,j){return this.c/(3+i-j)};
 d(-1, 3);
 e = d;
// e(0,0); // Error (method call)
}

