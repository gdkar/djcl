with(
{
 f: function(s){
  return this.SECRET + s + this.SECRET;
 },
 SECRET: "ok"
})
{
 RESULT = f("test");
/*
 with({a: function(x){return this.SECRET}, t:f, SECRET:"bad"})
 {
  T1 = t("done");
  f = a;
  T2 = f("passed");
 }
*/
}

