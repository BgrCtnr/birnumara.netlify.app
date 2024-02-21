document.addEventListener("DOMContentLoaded", function() {
    fetch('/3SLIDER/slider.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('beforeend', data);
        });
});





