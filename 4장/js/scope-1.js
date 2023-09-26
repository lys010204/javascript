function sum (num1,num2) {
    var result = num1+num2; // 지역변수(지역 스코프)
}

sum(10,20);

console.log(result); // 오류 result 가 없다.