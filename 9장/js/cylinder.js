// 생성자 함수 만들기
// function Cyl(Diameter,Height){
//     this.Diameter = Diameter;
//     this.Height = Height;

//     this.getVolume = function(){
//         let r = this.Diameter/2;
//         return (Math.PI*r*r*Height).toFixed(2);
//     };
// }


// 클래스 만들기
class Cyl{
    constructor(Diameter,Height){
        this.Diameter = Diameter;
        this.Height = Height;
        }
        getVolume(){
            let r = this.diameter/2;
            return (Math.PI*r*r*height).toFixed(2);
        }
    }
    
const btn = document.querySelector("button");
const result = document.querySelector("#result");
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const r1 = document.querySelector("#cyl-diameter").value;
    const height1 = document.querySelector("#cyl-height").value;
    if ((r1==='')||(height1==='')){
     result.innerText = "지름 높이값을 모두 입력하세요";
    }else{

    let cyl = new Cyl(parseInt(r1),parseInt(height1));

    result.innerText = cyl.getVolume();
    }
})

