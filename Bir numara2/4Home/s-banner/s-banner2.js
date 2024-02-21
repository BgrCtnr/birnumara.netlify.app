document.addEventListener("DOMContentLoaded", function() {
    fetch('/4Home/s-banner2.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('beforeend', data);
        });
});
