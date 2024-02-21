document.addEventListener("DOMContentLoaded", function() {
    fetch('/6Products/products.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('beforeend', data);
        });
});


