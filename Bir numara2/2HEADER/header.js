document.addEventListener("DOMContentLoaded", function() {
    fetch('/2HEADER/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('afterbegin', data);
        });
});
