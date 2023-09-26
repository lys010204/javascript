const factor = 5;

function calc(){
    return num*factor;
}

{
    const num = 10; // const와 let은 블럭단위로 사용하는 지역변수이므로 calc함수에 접근할 수 없다.
    let result = calc();
    console.log(`result : ${result}`);
}