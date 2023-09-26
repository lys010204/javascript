function mul(n1,n2){
    return n1*n2;
}

let num1 = parseInt(prompt("숫자 1 입력"));
let num2 = parseInt(prompt("숫자 2 입력"));

document.write(`<h1>${num1}X${num2}=${mul(num1,num2)}</h1>`);
