const box = document.querySelector("#box");

box.addEventListener("click", (e)=>{
    alert(`이벤트 발생 위치: ${e.pageX}, ${e.pageY}`);
});

const body = document.body;
const result = document.querySelector("#result") // 결과가 출력될 공간 가져오기

body.addEventListener("keydown",(e)=> {
    result.innerText = `
    code : ${e.code},
    key : ${e.key}
    `;
});