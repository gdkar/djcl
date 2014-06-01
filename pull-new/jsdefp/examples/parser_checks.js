//<!--

/**
 This Javascript file is meant to test the compilance of Javascript
 parsers with the ECMA 262 rev. 5 informal specification.
 **/

// 1. Tokenization
$_a = 1;
éb = .3e-075;

// Next line uses a Unicode line break
\u0068i = "\u0068ell\x6F "+/\u0057orld/U 

// Escaping
s = "âêîôûäëïöü³\'\"\\\t\n\r\x17\0\b€";

\u00C9.\u00C9 = {get \u00C9(){\u00C9: ;}}

// Expressions:
a=3+4*5, b=(3+4)*5, c=(0,1);

// If
if
(
1
)
;
else

;

if(1) 0


else 1


if(1);

else{} 1

if(1){}
else;

if(1)
if(2)
if(3);
else;
else;
else;

if(1)
do{}
while(0)
else;

if(1)


try
{
}
finally
{


}

else;

if(1)
 switch(e)
 {
  case 100: break;
 }
else;


// Try

try
{


}
catch
(
e
)
{

} 1

try
{

}
finally
{

} 1

try
{


}
catch(e)
{

}
finally
{

} 1

// Do

do; while(1)
do 1
while
(0)

do
{

}
while(1);

while(0);
while(0) 1
while(0)
{

} 1

// For 

for(i=(1,2,3); i <= 100; i++);
for(var i=1, j=0; j*i>10; j--)
{

} 1

for(;i;i++);
for(;;i++);
for(var i;;);
for(1?1 in []:0;0;);
for(i in o);
for(var i=1 in o);

// Switch

switch
(
e
)
{

} 0

// Function declarations

function a(){function b(){}function c(){}1}function b(){}1;

// Variable declaration

var v1='', v2, v3=function(){var x;return 1}

return
1
return 1

a: for(i=0; i<100; i++);
a: b: c: ;

// ++
a

++

b; // Should be parsed a;++b
a+++ +++b;

with(a){} 1

// }
{}{};
{a:0} // Not an object!

// JSON
a = {
 t: .23e5,
 1: [this, null, true, false],
 $: function(){},
 get test(){return 100},
 set test(v){this.test = v;},
 NaN: 0,
 try: "nope",
};

// Arrays
[,], [,,], [a,], [,a,],[,a,,]

// Div problems
a = {} / /a/
a = function(){}/ /a/
{}/2/
a /= /=a/ / 2

if(1)/a/
while(0)/a/
try{/a/}catch(e){/b/}/c/
for(;;)/a/
switch(e){case /a/:/b/}/c/
do{/a/}while(/b/)/c/
with({a:/a/,b:1/2}) /http:\/\/[^/]+/g
function a(){/a/.throw; return}/a/
var x = /a/ /2/
3/4
/5;
return c
(d+e).test();
throw {
}/2
"multiline\
string";
/*
 // Ok
 // */
'\''+"\""

new a.t
new a[0].t
new a[0].t().p[1]
new new a[0].b[1](1).c(true).d[2]
// Should parse (new (new a[0].b[1](1)).c(true)).d[2];
new new new a[0].b[1](null).c[2].d(0)[1].e(1).f

var a=1, b=(2, c=3);
for(var i=1, j=(2, k=3);false;);
for((i in j) in k); 

// -->
