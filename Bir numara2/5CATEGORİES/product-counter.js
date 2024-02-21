document.addEventListener("DOMContentLoaded", function() {
    const incrementButton = document.getElementById("increment");
    const decrementButton = document.getElementById("decrement");
    const countDisplay = document.getElementById("count");
  
    let count = 1;
  
    incrementButton.addEventListener("click", function() {
      count++;
      updateCountDisplay();
    });
  
    decrementButton.addEventListener("click", function() {
      if (count > 1) {
        count--;
        updateCountDisplay();
      }
    });
  
    function updateCountDisplay() {
      countDisplay.textContent = count;
    }
  });
  