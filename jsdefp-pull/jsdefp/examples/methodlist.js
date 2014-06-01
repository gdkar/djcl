with({
 a: [
 function(){return this.b},
 function(){return this.c+this.b}
 ],
 b:0,
 c:1
})
{
 a[0] = function(){return this.b/this.c};
 RES = a[0]();
 c = a[0];
 c();
}

