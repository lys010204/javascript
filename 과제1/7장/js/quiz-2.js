const btn = document.querySelector("#bttn");
const box = document.querySelector("#noti-box");

btn.addEventListener("click",() => {
    let newDiv = document.createElement("div");
    newDiv.innerText="알림 내용이 표시됩니다."
    newDiv.classList.add("noti");
    
    box.appendChild(newDiv);
    
    setTimeout(() => newDiv.remove(), 3000);
});