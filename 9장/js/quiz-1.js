class Pet{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    run(){
        document.write(`<h2>${this.color} ${this.name}가 달린다.`);
    }
}

const pet1 = new Pet("바둑이","하얀");
pet1.run();