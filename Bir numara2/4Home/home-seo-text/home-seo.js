document.addEventListener("DOMContentLoaded", function() {
    fetch('/4Home/home-seo.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('beforeend', data);
        });
});
