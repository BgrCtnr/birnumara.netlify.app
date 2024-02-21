document.addEventListener("DOMContentLoaded", function() {
    fetch('/4Home/multi-banner/multi-banner4.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('beforeend', data);
        });
});
