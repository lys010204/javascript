const detail = document.querySelector("#detail");
const btn = document.querySelector("#view");

btn.addEventListener("click",() => {
    detail.classList.toggle("hidden");
});