with({
 double: function(a)
 {
  var i=0;

  for(i=0; i<a.length; i++)
   a[i] *= 2; // Literal property access
 }
})
{
 double([1,2,3]);
}
