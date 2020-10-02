export const runSlideshow = () => {

    document.querySelector(".prev ").addEventListener("click", function () { plusSlides(-1) });
    document.querySelector(".next ").addEventListener("click", function () { plusSlides(1) });

    document.querySelector(".dot1 ").addEventListener("click", function () {currentSlide(1) });
    document.querySelector(".dot2 ").addEventListener("click", function () {currentSlide(2) });
    document.querySelector(".dot3 ").addEventListener("click", function () {currentSlide(3) });

    var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

}