// 맵 Map()
// 키와 값으로 이루어져 있다.
// 맴의 프로퍼티는 문자열뿐만아니라 모든 자료형 사용 가능
// 맵의 프로퍼티는 순서대로 접근, 처리 가능
let bag = new Map() // Map객체의 인스턴스인 bag생성
console.log(bag.set("색상",'빨강'));

// Map객체를 만들면서 프로퍼티를 지정할 수 있다.
// []를 사용하면 처음부터 프로퍼티 지정가능
let myCup = new Map([
    ["색상",'네이비'],
    ['재료','세라믹'],
    ['용량','450ml']
]);
console.log(myCup);

// 맵 체이닝
bag.set('형태','백팩');
bag.set('용도','책가방');
console.log(bag);

// set() 메서드를 여러번 쓰기 귀찮을 때, 연결해서 사용가능
bag.set('type','mini').set('purpose','daily');
console.log(bag)


// Map의 프로퍼티와 메서드
console.log(bag.size);
console.log(bag.get('색상'));
console.log(bag.has('색상'));
console.log(bag.has('color'));
console.log(bag.delete('type'));
console.log(bag);
console.log(bag.delete('이름'));
console.log(bag);
bag.clear();
console.log(bag);

console.log(myCup);

// 맵은 순서를 가지고 있는 객체 => 이터러블 객체
// 키나 값을 가져오는 메서드는 이터러블 객체로 반환한다.
for(let key of myCup.keys()){
    console.log(key);
}

for(let value of myCup.values()){
    console.log(value);
}

for(let entry of myCup){
    console.log(entry);
}

// 셋(Set())
// 셋은 키가 없다.
// 여러개의 값을 모아 놓은 것 => 배열과 같지만, 값이 중복되지 않는다.
let numSet1 = new Set();
numSet1.add('one');
numSet1.add('two');
console.log(numSet1);

numSet1.add('three').add('four');
console.log(numSet1);

// 배열을 인수로 받아서 셋으로 만들 수 있다.
let numSet2 = new Set([1,2,3]);
console.log(numSet2);

let numSet3 = new Set([1,2,3,2,3,4,1,2]);
console.log(numSet3); // 중복되는 값을 제거하고 셋을 만듦.

console.log(numSet3.keys);
console.log(numSet3.values);

// values 메서드를 사용해 값을 가져와 for of반복문으로
// language 셋에 있는 값을 출력하시오
let language = new Set(['js','c','python','c','js']);

for(let value of language.values()){
    console.log(value);
}