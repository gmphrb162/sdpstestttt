var slidelayer = 1;
showslides(slidelayer);

function plusSlides(n) {
    showslides(slidelayer += n);
}

function currentslide(n) {
    showslides(slidelayer = n);
}

function showslides(n) {
    var i;
    var slides = document.getElementsByClassName("Imagess");
    var dots = document.getElementsByClassName("dot");
    if (n> slides.length) { slidelayer = 1}
    if (n <1) { slidelayer = slides.length}
    for (i = 0; i <slides.length;i++){
        slides[i].style.display = "none";

    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slidelayer - 1].style.display = "block";
    dots[slidelayer - 1].className += "active";

}