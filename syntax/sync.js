var fs = require('fs'); //fs모듈불러옴

/*
//red file sync
console.log('A');
var result = fs.readFileSync('sample.txt', 'utf8');
console.log(result); //b
console.log('C');

*/

/*
console.log('A');
fs.readFile('sample.txt', 'utf8',function(err,result){
    console.log(result);
}); //비동기 파일 찾느라 시간 걸리는 동안 뒤에꺼 먼저 ~ 
console.log('C');
*/


                     /// call back ////
function a(){
    console.log('A');
}
a();

var b = function () {  //자바스크립트에는 함수도 value
    console.log('b');
}
b();

function slowfunc(callback){
  callback();
}
slowfunc(b);