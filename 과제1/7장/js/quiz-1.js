const btn = document.querySelector("button");
const tbody = document.querySelector("tbody");

btn.addEventListener("click",(e) => {
    e.preventDefault();
    const name = document.querySelector("#username").value;
    const major = document.querySelector("#major").value;
    
    let newtd1 = document.createElement("td");
    let newtd2 = document.createElement("td");

    let nameNode = document.createTextNode(name);
    let majorNode = document.createTextNode(major);

    newtd1.appendChild(nameNode);
    newtd2.appendChild(majorNode);

    tbody.appendChild(newtd1);
    tbody.appendChild(newtd2);

});