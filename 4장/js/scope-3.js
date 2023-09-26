// var hi = "hello"

// function chagne(){
//     //함수 안에서 전역변수 값 수정가능
//     hi = "bye";
// }

// console.log(hi); // hello
// chagne();
// console.log(hi); // bye

var hi = "hello"

function chagne(){
    var hi = "bye"; // 지역변수, 이 함수에서만 사용가능
}

console.log(hi); // hello
chagne();
console.log(hi); // hello
