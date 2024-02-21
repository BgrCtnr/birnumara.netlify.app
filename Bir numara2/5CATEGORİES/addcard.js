document.getElementById("addToCartButton").addEventListener("click", function() {

    var cartPopup = document.getElementById("cartPopup");
    cartPopup.style.display = "block";

    setTimeout(function() {
        cartPopup.style.display = "none";
    }, 3000); 
});



