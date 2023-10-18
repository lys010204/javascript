let btn = document.querySelector("button");
btn.addEventListener("click",() =>{
    let newP = document.createElement("p");
    let textNode = document.createTextNode("안녕하세요");
    newP.appendChild(textNode);
    let basicNode = document.querySelectorAll("p")[2];
    document.body.insertBefore(newP,basicNode);
},{once:true});
