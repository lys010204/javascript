const title = document.querySelector("#title");
const author = document.querySelector("#author");
const save = document.querySelector("#save");
const bookList = document.querySelector("#bookList");

save.addEventListener("click", (e) => {
    // 제목과 저자 정보를 출력
    e.preventDefault(); // 버튼을 누르면 서버로 보내지 않는다.
    // 리스트 요소 만들기
    const item = document.createElement("li");
    // item에 내용 넣기
    item.innerHTML=`${title.value} - ${author.value}<span class="delButton">삭제</span>`;
    // 정보 영역에 추가
    bookList.appendChild(item);
    // 상자 내용 지우기
    title.value=" ";
    author.value=" ";
    //삭제 버튼 요소를 모두 가져온다.
    const delButtons = document.querySelectorAll(".delButton");
    // 삭제 버튼을 눌렀을 때 삭제한다.
    for (let delButton of delButtons){
        delButton.addEventListener("click",function() {
            this.parentNode.remove(this.parentNode);
        });
    }
});