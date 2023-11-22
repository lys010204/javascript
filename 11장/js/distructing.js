// 구조 분해 할당하기
const fruits = ["사과","복숭아"]
let apple = fruits[0];
let peach = fruits[1];

console.log(apple);
console.log(peach);


// 구조 분해 할당 왼쪽에는 변수, 오른쪽에는 분해할 값 지정
let [apple1,peach1] = ["사과","복숭아"];

console.log(apple1);
console.log(peach1);

// 일부값만 변수에 할당
let [spring, , fall,] = ["봄","여름","가을","겨울"];

console.log(spring);
console.log(fall);

// 나머지 변수를 사용해 구조 분해 할당 하기
// 나머지 값을 묶어서 만든 변수를 나머지 변수라고 한다.
// 변수 앞에 ... 붙임
let [teacher,...student]=["이용상","신희민","오동헌","고영명"];
console.log(teacher);
console.log(student);

// 두변수의 값 교환
let x = 10;
let y = 20;
console.log(x);
console.log(y);

[x, y]=[y,x];

// let temp;
// temp=x;
// x=y;
// y=temp;

console.log(x);
console.log(y);


// 객체 구조 분해 할때는 프로퍼티 이름이나 메서드 이름을 변수이름으로 사용
// 객체는 순서가 없기 때문에 키 이름과 변수 이름이 같아야 한다.
const member = {
    name1 : '이용상',
    age1 : 23
}
let {name1,age1} = member;

console.log(name1);
console.log(age1);

// 객체 프로퍼티에 접근하지 않고 변수를 사용하여 프로그래밍 가능
let {name2,age2} = {name2:'신희민',age2:22};
console.log(name2);
console.log(age2);

// 새로운 변수 이름 사용하기
// name키의 값을 새로운 변수 userName에 할당하려면...
// name 프퍼티값을 userName 변수에 할당해야 한다.
const member2={
    name:'이용상',
    age:23
}
let {name:userName,age} = member2
console.log(userName);


// 중첩된 객체 구조 분해
// 중첩된 객체는 객체 안에 객체가 있는 것.
const student1 = {
    name:'이용상',
    score:{
        history:88,
        math:80,
        eng:100
    },
    friends : ['신희민','오동헌','고영명']
}

// student1에 있는 값을 구조 분해하여 변수에 할당할 수 있다.
let{
    name, // student1.name
    score : {history,math,eng}, // student1.score.eng
    friends: [f1,f2,f3]
}=student1

console.log(math);
console.log(f2);
