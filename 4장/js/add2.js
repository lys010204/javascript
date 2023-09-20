function calSum(num) {
    let sum = 0;
    for (i=1;i<=num;i++){
        sum+=i;
    }
    document.write(`<h1>1부터 ${num}까지의 합은 ${sum} 입니다.</h1>`);
}

calSum(10);