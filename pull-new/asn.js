function _asnhex_getByteLengthOfL_AtObj(s, pos)
{
  if (s.substring(pos + 2, pos + 3) != '8') return 1;
  var i = parseInt(s.substring(pos + 3, pos + 4));
  if (i == 0) return -1;
  if (0 < i && i < 10) return i + 1;
  return -2;
}

function _asnhex_getHexOfL_AtObj(s, pos)
{
  var len = _asnhex_getByteLengthOfL_AtObj(s, pos);
  if (len < 1) return '';
  return s.substring(pos + 2, pos + 2 + len * 2);
}

function _asnhex_getIntOfL_AtObj(s, pos)
{
  var hLength = _asnhex_getHexOfL_AtObj(s, pos);
  if (hLength == '') return -1;
  var bi;
  if (parseInt(hLength.substring(0, 1)) < 8) {
     bi = parseInt(hLength,16);
  } else {
     bi = parseInt(hLength.substring(2), 16);
  }
  return bi;
}

function _asnhex_getStartPosOfV_AtObj(s, pos)
{
  var l_len = _asnhex_getByteLengthOfL_AtObj(s, pos);
  if (l_len < 0) return l_len;
  return pos + (l_len + 1) * 2;
}

function _asnhex_getHexOfV_AtObj(s, pos)
{
  var pos1 = _asnhex_getStartPosOfV_AtObj(s, pos);
  var len = _asnhex_getIntOfL_AtObj(s, pos);
  return s.substring(pos1, pos1 + len * 2);
}

function _asnhex_getPosOfNextSibling_AtObj(s, pos)
{
  var pos1 = _asnhex_getStartPosOfV_AtObj(s, pos);
  var len = _asnhex_getIntOfL_AtObj(s, pos);
  return pos1 + len * 2;
}

function _asnhex_getPosArrayOfChildren_AtObj(h, pos)
{
  var a = new Array();
  var p0 = _asnhex_getStartPosOfV_AtObj(h, pos);
  a.push(p0);

  var len = _asnhex_getIntOfL_AtObj(h, pos);
  var p = p0;
  var k = 0;
  while(1)
  {
    var pNext = _asnhex_getPosOfNextSibling_AtObj(h, p);
    if (pNext == null || (pNext - p0  >= (len * 2))) break;
    if (k >= 200) break;

    a.push(pNext);
    p = pNext;
    k++;
  }

  return a;
}

parsePK = function(s)
{
  s = s.replace("-----BEGIN RSA PRIVATE KEY-----", "");
  s = s.replace("-----END RSA PRIVATE KEY-----", "");
  s = s.replace(/[ \n]+/g, "");
  s = encoding.base64_decode(s);
  var hPrivateKey = encoding.astr2hstr(s);
  var v1 = _asnhex_getStartPosOfV_AtObj(hPrivateKey, 0);
  var n1 = _asnhex_getPosOfNextSibling_AtObj(hPrivateKey, v1);
  var e1 = _asnhex_getPosOfNextSibling_AtObj(hPrivateKey, n1);
  var d1 = _asnhex_getPosOfNextSibling_AtObj(hPrivateKey, e1);
  var p1 = _asnhex_getPosOfNextSibling_AtObj(hPrivateKey, d1);
  var q1 = _asnhex_getPosOfNextSibling_AtObj(hPrivateKey, p1);
  var dp1 = _asnhex_getPosOfNextSibling_AtObj(hPrivateKey, q1);
  var dq1 = _asnhex_getPosOfNextSibling_AtObj(hPrivateKey, dp1);
  var co1 = _asnhex_getPosOfNextSibling_AtObj(hPrivateKey, dq1);
  var v =  _asnhex_getHexOfV_AtObj(hPrivateKey, v1);
  var n =  _asnhex_getHexOfV_AtObj(hPrivateKey, n1);
  var e =  _asnhex_getHexOfV_AtObj(hPrivateKey, e1);
  var d =  _asnhex_getHexOfV_AtObj(hPrivateKey, d1);
  var p =  _asnhex_getHexOfV_AtObj(hPrivateKey, p1);
  var q =  _asnhex_getHexOfV_AtObj(hPrivateKey, q1);
  var dp = _asnhex_getHexOfV_AtObj(hPrivateKey, dp1);
  var dq = _asnhex_getHexOfV_AtObj(hPrivateKey, dq1);
  var co = _asnhex_getHexOfV_AtObj(hPrivateKey, co1);
  return {n:(n), e:(e), d:(d), p:(p), q:(q), dmp1:(dp), dmq1:(dq), iqmp:(co)};
}


