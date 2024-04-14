var x = document.getElementById("i10");
var y = document.getElementById("i9");
x.addEventListener("mouseover", function () {
    y.style.marginLeft = "10px";
    y.style.color = "red";
    x.style.boxShadow = "2px 2px 5px 2px red";
    x.style.textShadow = "2px 2px 3px black";
});
x.addEventListener("mouseout", function () {
    y.style.marginLeft = "0px";
    y.style.color = "black";
    x.style.textShadow = "none";
    x.style.boxShadow = "none";
});

var a = document.getElementById("i11");
var b = document.getElementById("i12");
a.addEventListener("mouseover", function () {
    b.style.marginLeft = "20px";
    b.style.color = "green";
    a.style.boxShadow = "2px 2px 5px 2px green";
    a.style.textShadow = "2px 2px 3px black";
    // a.style.marginBottom = "10px"
});
a.addEventListener("mouseout", function () {
    b.style.marginLeft = "0px";
    b.style.color = "black";
    a.style.textShadow = "none";
    a.style.boxShadow = "none";
});
