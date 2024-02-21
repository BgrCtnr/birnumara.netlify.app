document.getElementById("addToCartButton2").addEventListener("click", function() {

    var cartPopup = document.getElementById("cartPopup2");
    cartPopup.style.display = "block";

    setTimeout(function() {
        cartPopup.style.display = "none";
    }, 3000); 
});