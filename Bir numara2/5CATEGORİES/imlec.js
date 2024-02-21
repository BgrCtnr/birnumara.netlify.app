
const mainImage = document.getElementById('mainImage');
const mainImageContainer = document.querySelector('.main-image');

mainImageContainer.addEventListener('mousemove', function(e) {
  const rect = mainImage.getBoundingClientRect();
  const x = e.clientX - rect.left; 
  const y = e.clientY - rect.top; 
  const width = mainImage.offsetWidth;
  const height = mainImage.offsetHeight;
  const offsetX = 0.5 - x / width; 
  const offsetY = 0.5 - y / height; 

  const scale = 1.2; 

  mainImage.style.transform = `scale(${scale}) translate(${offsetX * 100}px, ${offsetY * 100}px)`;
});

mainImageContainer.addEventListener('mouseleave', function() {
  mainImage.style.transform = 'scale(1) translate(0, 0)';
});