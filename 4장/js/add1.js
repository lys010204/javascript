function calSum() {
    let sum = 0;
    for (i=1;i<=10;i++){
        sum+=i;
    }
    document.write(`<h1>1부터 10까지의 합은 ${sum} 입니다.</h1>`);
}

calSum();