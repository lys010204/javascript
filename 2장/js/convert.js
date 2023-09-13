// 섭씨온도 = (화씨 온도 - 32) / 1.8
let f = parseFloat(prompt("화씨 온도 입력"));
let c = ((f-32) / 1.8).toFixed(1);
document.write(`화씨 온도 ${f}도는 섭씨 온도 ${c} 입니다!`);