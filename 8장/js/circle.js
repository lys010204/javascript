// 반지름을 입력받아 원의 넓이와 둘레 출력한다.
// 반지름은 프롬프트로 입력 받는다.
// 원의 넓이와 둘레를 구하는 함수를 각각 작성합니다.
// 넓이와 둘레는 소수 3자리까지 출력합니다.

const result = document.querySelector("#result");

let r = prompt("반지름 입력");
function area(r){
    return Math.PI*r*2;
}

function circum(r){
    return Math.PI*r*r;
}


result.innerText = `원의 넓이 : ${(area(r)).toFixed(3)},
                    원의 둘레 : ${(circum(r)).toFixed(3)}`;


