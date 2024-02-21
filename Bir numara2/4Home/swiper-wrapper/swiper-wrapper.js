document.addEventListener("DOMContentLoaded", function() {
    fetch('/4Home/swiper-wrapper.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('beforeend', data);
        });
});
