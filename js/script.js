var orderButton = document.getElementById("order-button");
var orderButton2 = document.getElementById("order-button2");
var orderButton3 = document.getElementById("order-button3");
var orderForm = document.getElementById("order-form");

orderButton.addEventListener("click", function () {
    orderForm.scrollIntoView({
        behavior: 'smooth'
    });
});
orderButton2.addEventListener("click", function () {
    orderForm.scrollIntoView({
        behavior: 'smooth'
    });
});
orderButton3.addEventListener("click", function () {
    orderForm.scrollIntoView({
        behavior: 'smooth'
    });
});
// reviews
var carousel = document.getElementById("review-carousel");
var slides = carousel.getElementsByClassName("review-slide");
var nextButton = document.getElementById("next-button");
var prevButton = document.getElementById("prev-button");
var currentIndex = 0;

function nextSlide() {
    slides[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].style.display = "block";
}

function prevSlide() {
    slides[currentIndex].style.display = "none";
    currentIndex = (currentIndex + slides.length - 1) % slides.length;
    slides[currentIndex].style.display = "block";
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// timer
var countDownDate = new Date().getTime() + 30 * 60 * 1000;
var timerText = document.getElementById("timer-text");

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = minutes + " минут " + seconds + " секунд ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Акция завершилась, вы не успели";
        timerText.style.display = "none";
    }
}, 1000);

