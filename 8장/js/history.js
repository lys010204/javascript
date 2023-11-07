const forward = document.querySelector("#forward");
const back = document.querySelector("#back");

back.addEventListener("click",()=>{
    history.go(-1);
})

forward.addEventListener("click",()=>{
    history.go(1);
})