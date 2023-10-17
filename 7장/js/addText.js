// 버튼 요소 가져오기
const orderBtn = document.querySelector("#order");

// 주문정보 영역 가져오기
const orderInfo = document.querySelector("#orderInfo");

// 책제목 요소 가져오기
const title = document.querySelector("#container > h2");

//버튼을 클릭하면..
orderBtn.addEventListener("click", () => {
    // 새로운 p요소 만들기
    let newP = document.createElement("p");
    // 텍스트 만들기 - title의 텍스트 부분만 가지고 와서 텍스트 노드로 생성.
    let textNode = document.createTextNode(title.innerText);
    // 텍스트노드를 p요소에 추가
    newP.appendChild(textNode);
    newP.style.fontSize="1.5em";
    newP.style.color="blue";
    // p요소를 oderIinfo 영역에 추가
    orderInfo.appendChild(newP);
}, {once:true});

