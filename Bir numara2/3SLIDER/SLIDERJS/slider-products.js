// slider-product
document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const slider = document.querySelector(".product-slider");
    const menuContainer = document.querySelector(".product-slider-container");
    const products = document.querySelectorAll(".product");
    let currentPosition = 0;
    let productWidth = 404; 

    nextButton.addEventListener("click", function() {
        const visibleWidth = menuContainer.offsetWidth; 
        const totalWidth = slider.scrollWidth; 

        if (currentPosition < totalWidth - visibleWidth) {
            currentPosition += productWidth;
        } else {
            currentPosition = 0; 
        }
        updateSliderPosition();
    });

    prevButton.addEventListener("click", function() {
        if (currentPosition > 0) {
            currentPosition -= productWidth;
        } else {
            currentPosition = totalWidth - visibleWidth; 
        }
        updateSliderPosition();
    });

    function updateSliderPosition() {
        slider.style.transition = "transform 0.5s ease-in-out"; 
        slider.style.transform = `translateX(-${currentPosition}px)`;
    }
});
