function calSum(num) {
    let sum = 0;
    for (i=1;i<=num;i++){
        sum+=i;
    }
    return sum;
}

let number = parseInt(prompt("정수를 입력하세요"));
document.write(`<h1>1부터 ${number}까지의 합은 ${calSum(number)} 입니다.</h1>`);