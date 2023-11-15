let GCD = (num1, num2) => {
    let gcd = 1;

    for(let i=2; i<=Math.min(num1, num2); i++){
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i;
        }
    }
    return gcd;
}

const btn = document.querySelector("#calc");

btn.addEventListener("click",()=>{
    const n1 = document.querySelector('#number1').value;
    const n2 = document.querySelector('#number2').value;
    const result = document.querySelector("#result");
    result.innerText = GCD(n1,n2);
});
