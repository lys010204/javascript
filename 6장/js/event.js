// 버튼 클릭하면 배경색 바꾸기
// 아이디가 btn1인 요소가져오기

const bt1 = document.querySelector("#btn1");

bt1.onclick = function() {
    document.body.style.backgroundColor = "pink";
}


// 배경 바꾸는 함수 따로 정의하기
function changeBackground() {
    document.body.style.backgroundColor = "#404040";
    document.body.style.color = "skyblue";
}

const bt2 = document.querySelector("#btn2");
bt2.onclick = changeBackground;

/* 
alert실행 되지 않는다.
on이벤트 프로퍼티는 하나만 사용이 가능하다.
마지막 사용한 onclick이 적용되어 배경색만 바뀐다.
하나의 이벤트에 여러함수를 연결하려면 addEventListner()를 사용해야 한다.
*/

const bt3 = document.querySelector("#btn3");
bt3.onclick = function(){
    document.body.style.backgroundColor = "orange";
}

const bt4 = document.querySelector("#btn4");

bt4.addEventListener("click" , () => {
    document.body.style.backgroundColor = "tomato";
})

const bt5 = document.querySelector("#btn5");

bt5.addEventListener("click" , () => {
    document.body.style=""; // 기존 스타일 삭제
    document.body.classList.toggle("convert");
})

// 텍스트 필드에 입력한 글자수 알아보기
const bt6 = document.querySelector("#btn6");

bt6.addEventListener("click" , () => {
    const word = document.querySelector("#word").value; // 텍스트 상자의 내용을 가져옴
    const result = document.querySelector("#result");
    let cnt = word.length;
    result.innerText = `${cnt}`;
});