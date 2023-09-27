// 나머지 매개변수

function addnum2(...numbers) {
    let sum=0;
    
    for (let number of numbers){
        sum+=number;
    }
    return sum;
}

console.log(addnum2(1,3)) // 4

console.log(addnum2(1,3,5,7,9)) // 25