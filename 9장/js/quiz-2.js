class Pet{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    run(){
        document.write(`<h2>${this.color} ${this.name}가 달린다.`);
    }
}

class Cat extends Pet{
    constructor(name,color,breed){
        super(name,color); // 상위클래스의 프로퍼티 재사용
        this.breed = breed;// 새로운 프로퍼티 정의
    }
    // 새로운 메서드 정의
    viewInfo(){
        document.write(`<h2>색깔 : ${this.color} 이름 : ${this.name} 품종 : ${this.breed}`);
    }
}

const cat1 = new Cat("보리","흰색","페르시안");
cat1.viewInfo();
cat1.run();