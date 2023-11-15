// 클래스 생성
class BookC {
    // 프로퍼티 생성
    constructor(title,price){
        this.title=title;
        this.price=price;
    }
    // 메서드
    buy(){
        console.log(`${this.title}을 ${this.price}원에 구매했습니다.`);
    }
}

// 객체 생성
const book1 = new BookC("java",50000);
book1.buy();

// 기존 클래스를 확장하여 새로운 클래스 선언
class TextbookC extends BookC{
    constructor(title,price,major){
        super(title,price); // 상위클래스의 프로퍼티 재사용
        this.major = major;// 새로운 프로퍼티 정의
    }
    // 새로운 메서드 정의
    buyTextBook(){
        console.log(`${this.major} 전공 서적, ${this.title}을 구매했습니다.`);
    }
}

//객체생성
const book2 = new TextbookC('자바스크립트',24000,"컴퓨터 공학부");
book2.buyTextBook();
book2.buy();

