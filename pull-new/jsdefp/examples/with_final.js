with({
 a: function(o)
 {
  with(o.a, o.b, o)
  {
   o;
   return a+b
  }
 }
})
{
 RESULT =  a({a:0, b:1})
}
