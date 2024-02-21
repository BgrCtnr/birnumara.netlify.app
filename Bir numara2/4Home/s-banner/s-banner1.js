document.addEventListener("DOMContentLoaded", function() {
    fetch('/4Home/s-banner1.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('beforeend', data);
        });
});
