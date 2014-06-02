#! /usr/bin/env node
var f=require('./encoding_fast.js'),
    crypto=require('crypto'),
  s=crypto.randomBytes(64);
var tests =  {
//  "ucs2->":  [function(s){return s.ucs2Slice(0,s.length)},function(s){return f.ucs2_encode(s.binarySlice(0,s.length))}],
  "utf8<-":  [function(s){return s.binarySlice(0,s.length)},function(s){return f.utf8_decode(s.utf8Slice(0,s.length))}],
//  "ucs2<-":  [function(s){return s.binarySlice(0,s.length)},function(s){return f.ucs2_decode(s.ucs2Slice(0,s.length))}],
//  "hex->" :  [function(s){return s.hexSlice(0,s.length)},function(s){return f.astr2hstr(s.binarySlice(0,s.length));}],
//  "hex<-" :  [function(s){return s.binarySlice(0,s.length);},function(s){return f.hstr2astr(s.hexSlice(0,s.length));}],
//  "b64->" :  [function(s){return s.base64Slice(0,s.length);},function(s){return f.base64_encode(s.binarySlice(0,s.length));}],
//  "b64<-" :  [function(s){return s.binarySlice(0,s.length);},function(s){return f.base64_decode(s.base64Slice(0,s.length));}]
  }
var results = [],pass=0,fail=0;
for(var test in tests){
  results = [test];
  for( var i = 0; i < 4096; i++){
    s = crypto.randomBytes ((4+((Math.random()*Math.pow(2,8))>>>0))*2);
    var s0=tests[test][0](s);
    var s1=tests[test][1](s);
    if ( s0==s1 ){pass++}
    else{fail++; }
  }
  results.push(test+'\tpass: '+pass+'\tfail: '+fail)

  console.log(results.join('\n'));
  pass=0;fail=0;
}
var  repl=require('repl').start({
    useColors: true,
  })

repl.context.f=f;
repl.context.s=s;
repl.context.crypto=crypto

