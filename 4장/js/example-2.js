
let sum = (a,b) => {
    return a+b; //return 생략 가능
}

let a1 = parseInt(prompt('숫자1를 입력하세요'));
let b1 = parseInt(prompt('숫자2를 입력하세요'));

document.write(`<h2>${a1}+${b1}=${sum(a1,b1)}</h2>`);