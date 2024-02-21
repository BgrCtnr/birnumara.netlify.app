const priceRange1 = document.getElementById('price-range1');
const priceValue1 = document.getElementById('price-value1');

priceRange1.addEventListener('input', function() {
  priceValue1.textContent = priceRange1.value;
});

const priceRange2 = document.getElementById('price-range2');
const priceValue2 = document.getElementById('price-value2');

priceRange2.addEventListener('input', function() {
  priceValue2.textContent = priceRange2.value;
});
