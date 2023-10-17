// 캐러셀 영역 가져오기
const container = document.querySelector("#container");

// 이미지 배열
const pics = ["pic-1.jpg","pic-2.jpg","pic-3.jpg","pic-4.jpg","pic-5.jpg"];

// 첫 번째 이미를 기본으로
container.style.backgroundImage = `url(images/${pics[0]})`;

//화살표 가져오기
const arrows = document.querySelectorAll(".arrow") // 클래스가 두개니까 All사용

let i =0;

// 화살표 버튼은 누르면 반복해서 다음 또는 이전 이미지를 가져 온다.
arrows.forEach(arrow => {
    arrow.addEventListener("click",(e) =>{
        if(e.target.id === "left"){ // 왼쪽화살표 클릭하면
            i--; // 이전 이미지로 이동
            if(i<0){
                i = pics.length-1; // 마지막 인덱스로 돌아감
            }
        }
        else if (e.target.id === "right"){
            i++;
            if(i >= pics.length){ // 마지막 인덱스보다 크면
                i=0; // 첫번째 인텍스로 돌아감
            }
        }
        container.style.backgroundImage = `url(images/${pics[i]})`; // i값에 따라 이미지 표시
    })
})