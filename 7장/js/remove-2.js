// 리스트를 클릭하면 해당리스트 내용 삭제

const items = document.querySelectorAll("li");

for(let item of items){
    item.addEventListener("click",function() { //해당 항목을 클릭했을 때 그 항목이 삭제 됨.
        this.remove(); // this는 이벤트가 발생한 노드를 가리킴, 화살표함수 사용 불가
        // this.parentNode.removeChild(this); // 부모 노드에서 삭제
});
}
