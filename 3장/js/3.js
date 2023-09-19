let input = parseInt(prompt("숫자 입력"));

if (input%3===0){
    document.write(`${input}은 3의 배수입니다.`);
}
else{
    document.write(`${input}은 3의 배수가 아닙니다.`);
}