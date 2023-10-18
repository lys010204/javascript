const del = document.querySelectorAll("span");
for(let i of del){
    i.addEventListener("click",function(){
        this.parentNode.remove(); // span클릭하면 부모노드 p 삭제
    })
}