document.addEventListener("DOMContentLoaded", function() {
    fetch('/4Home/marketplace-banner.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('beforeend', data);
        });
});
