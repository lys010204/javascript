const arr = [1,3,5,7,9,11,13,15,17];

document.write(`<h1>주어진 배열 : [${arr}]<br></h1>`);

for (i=0;i<arr.length;i++){
    if (arr[i]>10){
        document.write(`${arr[i]} `);
    }
}
document.write('<hr>')
arr.forEach(function(num){
    if (num >10){
        document.write(`${num} `);
    }
});
document.write('<hr>')
for (num of arr){
    if (num>10){
        document.write(`${num} `);
    }
}