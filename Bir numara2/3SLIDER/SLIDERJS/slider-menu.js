const images = ["/images/products/iphone15-slider.png", "/images/products/philips-airfryer.png", "/images/products/philips-slider.png", "/images/products/canon-yazici-slider.png", "/images/products/samsung-klima.png"];
const descriptions = ["APPLE İphone 15 ve tüm Apple modelleri", "PHILIPS AIR FRYER MODELLERİ 2869 ₺'ye sizin olabilir!", "PHILIPS KİŞİSEL BAKIM ÜRÜNLERİNDE kaçırılmaz fırsatlar!", "CANON YAZICILARDA inanılmaz  fiyatlar!", "SAMSUNG KLİMALARLA kışa  hazırlan!"];

let currentIndex = 0;

function showImage(index) {
    const sliderImage = document.getElementById("slider-image");
    const imageDescription = document.getElementById("image-description");
    const imageTitles = document.querySelectorAll("#image-titles li");

    sliderImage.src = images[index];
    imageDescription.textContent = descriptions[index];

    imageTitles.forEach((title, i) => {
        if (i === index) {
            title.classList.add("selected");
        } else {
            title.classList.remove("selected");
        }
    });
}
document.querySelectorAll('#image-titles li').forEach(function(item, index) {
    item.addEventListener('click', function() {
        currentIndex = index;
        showImage(currentIndex);
    });
});


function nextSlide() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}

setInterval(nextSlide, 5000); 

showImage(currentIndex);



