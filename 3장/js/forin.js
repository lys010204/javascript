const student = {
    major : "컴공부",
    idNum : 202095072,
    name : '이용상'
};

for (key in student){
    document.write(`${key} : ${student[key]}<br>`);
}