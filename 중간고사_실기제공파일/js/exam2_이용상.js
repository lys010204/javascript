let btn = document.querySelector("#open"); // btn변수에 아이디가 open인것 가져오기
let profile = document.querySelector("#modal-box") // profile변수에 아이디가 modal-box 인것 가져오기
let close = document.querySelector("#close")//close변수에 아이디가 close인것 가져오기

btn.addEventListener("click",()=>{ // btn변수를 클릭했을때 처리할 함수 선언
    profile.classList.toggle("active"); // profile변수에 저장된 영역의 ccs값을 active 시킴
});

close.addEventListener("click",()=>{ // close변수를 클릭했을때 처리할 함수 선언
    profile.classList.toggle("active"); // profile변수에 저장된 영역의 ccs값을 active 시킴
});

setTimeout(() => profile.remove(), 5000); // 5초 후에 profile에 있는 active영역을 지우기


