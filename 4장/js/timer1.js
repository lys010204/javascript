function greeting(){
    console.log('hello')
}

setInterval(greeting,2000); //콜백함수에는 ()사용하지 않음

// 직접 함수를 선언하여 실행 
setInterval(() => {
    console.log('이용상');
},3000);