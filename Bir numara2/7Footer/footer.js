document.addEventListener("DOMContentLoaded", function() {
    fetch('/7Footer/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('beforeend', data);
        });
});



