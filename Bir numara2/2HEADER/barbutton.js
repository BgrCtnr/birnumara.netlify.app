

document.addEventListener("DOMContentLoaded", function() {
    var barButton = document.querySelector('.bar-button');
    var dropdownMenu = document.querySelector('.header-dropdown-menu');
  
    barButton.addEventListener('click', function() {
      dropdownMenu.classList.toggle('show');


    });
  });
  