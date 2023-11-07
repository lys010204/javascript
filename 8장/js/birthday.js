const result = document.querySelector("#result");


const born = new Date("2001-02-04");
const today = new Date();
let time = today.getTime(today.toDateString());
time = Math.round(time/(1000*60*60*24));

console.log(time - born.getTime())