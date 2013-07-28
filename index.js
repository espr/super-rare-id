// @see https://github.com/coolaj86/node-browser-compat/blob/master/btoa/index.js
if (typeof btoa !== 'function') {
  global.btoa = function btoa(str) {
    return new Buffer(str, 'binary').toString('base64');
  }
}
// @see http://stackoverflow.com/questions/9267899/arraybuffer-to-base64-encoded-string
function int8ArrToBase64(bytes) {
  var binary = ''
  for (var i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]&0xff)
  }
  return btoa(binary)
}

var _cntr = 0

/**
  generates a base64 string, consisting of
  6 bytes the current timestamp, 1 byte the
  value of a spinning counter, and 1 byte
  from Math.random

  @method superRareId
  @static
**/
function superRareId(){
  var b = new ArrayBuffer(8)
  b[7] = Math.floor(Math.random()*255);
  b[6] = (_cntr = (++_cntr)%256)
  var t = Date.now();
  b[5]=t&0xff;
  b[4]=t&0xff00>>8;
  b[3]=t&0xff0000>>16;
  b[2]=t&0xff000000>>24;
  var h=Math.floor(t/4294967296);
  b[1]=h&0xff;
  b[0]=h&0xff00>>8;
  return int8ArrToBase64(b)
}
module.exports = superRareId

/**
  generates an 8 byte random bitstring
  encoded as base64

  @method random
  @static
**/
superRareId.random = function(){
  var b = new ArrayBuffer(8)
  b[7] = Math.floor(Math.random()*255);
  b[6] = Math.floor(Math.random()*255);
  b[5] = Math.floor(Math.random()*255);
  b[4] = Math.floor(Math.random()*255);
  b[3] = Math.floor(Math.random()*255);
  b[2] = Math.floor(Math.random()*255);
  b[1] = Math.floor(Math.random()*255);
  b[0] = Math.floor(Math.random()*255);
  return int8ArrToBase64(b)
}
