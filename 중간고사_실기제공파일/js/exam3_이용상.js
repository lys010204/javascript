const btn = document.querySelector("#container button"); // btn변수에 아이디가 container인 부모 중에서 자식태그가 button인것 가져오기
const tbody = document.querySelector("tbody"); // tbody변수에 태그가 tbody인것 가져오기

btn.addEventListener("click",(e) => {
    e.preventDefault(); // 서버로 내용 보내지 않기
    const name = document.querySelector("#username").value; // name변수에 username에 넣은 값 저장
    const id = document.querySelector("#userid").value; // id변수에 userid에 넣은 값 저장
    const score = document.querySelector("#score").value;// score변수에 score에 넣은 값 저장
    let score2 = 0; // socre2 변수에 임시값으로 초기화

    let i=0; // 정상적으로 입력되지 않았을 때를 표시할 변수 선언

    if ((name==='')||(id==='')||(score==='')){ // 하나라도 입력되지 않으면 팝업 띄우기
        alert("모든 내용을 입력해 주세요!");
        i=1; // 정상입력된 상황이 아니므로 i값을 1로 바꿈
    }

    if ((score<0)||(score>100)){ // 점수 범위값이 제대로 입력되지 않으면 팝업 띄우기
        alert("잘못된 점수입니다!");
        i=1; // 정상입력된 상황이 아니므로 i값을 1로 바꿈
    }

    if(i==0){ // 위 두개의 조건문을 정상 통과했을시에 즉, i=0인경우

    if (score>90){ //score가 90점 이상이면 A
        score2="A";
    } 
    else if(score>80){ //score가 80점 이상이면 B
        score2="B";
    }
    else if(score>70){ //score가 70점 이상이면 C
        score2="C";
    }
    else if(score>60){ //score가 60점 이상이면 D
        score2="D"
    }
    else(score2="F");//score가 60점 미만이면 F

    let newtd1 = document.createElement("td"); // newtd1이라는 td태그 생성
    let newtd2 = document.createElement("td"); // newtd2이라는 td태그 생성
    let newtd3 = document.createElement("td"); // newtd3이라는 td태그 생성
    let newtd4 = document.createElement("td"); // newtd4이라는 td태그 생성

    let newtr1 = document.createElement("tr"); // newtr1이라는 tr태그 생성
    
    let nameNode = document.createTextNode(name); //nameNode라는 변수에 name값을 저장
    let idNode = document.createTextNode(id); //idNode라는 변수에 id값을 저장
    let scoreNode = document.createTextNode(score); //scoreNode라는 변수에 score값을 저장
    let score2Node = document.createTextNode(score2); //score2Node라는 변수에 score2값을 저장


    newtd1.appendChild(nameNode); // nameNode 변수를 newtd1태그에 연결
    newtd2.appendChild(idNode); // idNode 변수를 newtd2태그에 연결
    newtd3.appendChild(scoreNode); // scoreNode 변수를 newtd3태그에 연결
    newtd4.appendChild(score2Node); // score2Node 변수를 newtd4태그에 연결


    tbody.appendChild(newtd1); // newtd1을 tbody태그 밑으로 연결
    tbody.appendChild(newtd2); // newtd2을 tbody태그 밑으로 연결
    tbody.appendChild(newtd3); // newtd3을 tbody태그 밑으로 연결
    tbody.appendChild(newtd4); // newtd4을 tbody태그 밑으로 연결

    tbody.appendChild(newtr1); // newtr1을 tbody태그 밑으로 연결
}
});