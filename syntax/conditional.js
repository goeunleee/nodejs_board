var args = process.argv;
console.log(args[2]); //경로 등등 여러가지 요소중에 2번째 = 내가쓴거
console.log('A');
console.log('B');
if (args[2] === '1') { // 1 넣으면 true
    console.log('C1');
} else {
    console.log('C2');
}
console.log('D');
/////조건문//////////
if (true) {
    console.log('C1');
} else {
    console.log('C2');
}
console.log('D');