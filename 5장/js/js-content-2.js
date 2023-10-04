const title = document.querySelector("#title")  //제목 가져오기

//제목 영역을 클릭하면 내용을 바꾼다.
title.onclick = () => title.innerText = "프로필";

const userName = document.querySelector("#desc p")  //이름 가져오기

//이름 영역을 클릭하면 내용을 바꾼다.
userName.onclick = () => userName.innerHTML = "이름 : <b>이용상";

const img = document.querySelector("#profile img")  //이미지 가져오기

//그림을 클릭하면 사진을 바꾼다.(이미지 파일포함 경로를 바꾼다.)
img.onclick = () => img.src = "images/pf2.png";