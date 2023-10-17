const pic = document.querySelector("#container > img");

pic.addEventListener("mouseover", function() {
    pic.src = "images/pic-6.jpg";
});

pic.addEventListener("mouseout", function() {
    pic.src = "images/pic-1.jpg";
});