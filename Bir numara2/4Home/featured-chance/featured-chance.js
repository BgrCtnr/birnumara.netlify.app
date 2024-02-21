document.addEventListener("DOMContentLoaded", function() {
    fetch('/4Home/featured-chance.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('beforeend', data);
        });
});
