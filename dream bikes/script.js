var slideIndex = 1;
var indices = new Map();
indices.set("indian", 1);
indices.set("aprilia", 1);
indices.set("ducati", 1);
indices.set("ktm", 1);
indices.set("bmw1", 1);
indices.set("bmw2", 1);

window.onload = function(){
    for (var [m, n] of indices) {
        showDivs(n, m);
    }
}

function w3_open() {
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
}

function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}

function plusDivs(n, m) {
    var xIndex = indices.get(m);
    indices.set(m, xIndex += n);
    showDivs(indices.get(m), m);
}

function showDivs(n, m) {
    var i;
    var imgArr = document.getElementsByClassName(m);
    var xIndex = indices.get(m);
    if (n > imgArr.length) {
        indices.set(m, 1)
        xIndex = 1
    }
    
    if (n < 1) {
        indices.set(m, imgArr.length)
        xIndex = imgArr.length
    }
    
    for (i = 0; i < imgArr.length; i++) {
        imgArr[i].style.display = "none";  
    }
    imgArr[xIndex-1].style.display = "inline";
}