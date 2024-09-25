const images = [
    "images/ad-image-24.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpMtjH_AYqwtbqM0BhddqJEtVSa0T0-aIYvA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhmi0f-AomG4tURLSNaeC7wNaCKCLODdnMHA&s",
  ];
  let currentIndex = 0;

  function changeImage(element, index) {
    document.getElementById("mainImage").src =
      element.querySelector("img").src;
    currentIndex = index;
    const thumbnails = document.querySelectorAll(".thumbnail-item");
    thumbnails.forEach((item) => item.classList.remove("active"));
    element.classList.add("active");
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("mainImage").src = images[currentIndex];
    updateActiveThumbnail();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("mainImage").src = images[currentIndex];
    updateActiveThumbnail();
  }

  function updateActiveThumbnail() {
    const thumbnails = document.querySelectorAll(".thumbnail-item");
    thumbnails.forEach((item) => item.classList.remove("active"));
    thumbnails[currentIndex].classList.add("active");
  }

  function increment() {
    let quantity = document.getElementById("quantity").value;
    document.getElementById("quantity").value = parseInt(quantity) + 1;
  }

  function decrement() {
    let quantity = document.getElementById("quantity").value;
    if (quantity > 1) {
      document.getElementById("quantity").value = parseInt(quantity) - 1;
    }
  }

  const sizePrices = {
    "5kg": 15.00,
    "10kg": 30.00,
    "15kg": 35.00
  };
  
  document.getElementById("sizeSelect").addEventListener("change", function () {
    const selectedSize = this.value;
    const newPrice = sizePrices[selectedSize];
    updatePrice(newPrice);
  });
  
  function updatePrice(newPrice) {
    const priceElement = document.querySelector(".price");
    priceElement.innerHTML = `$${newPrice.toFixed(2)} <span class="text-muted"><s>$10.50</s></span>`;
    
    // Update Add to Cart button data-price
    const addToCartButton = document.querySelector(".add-to-cart");
    addToCartButton.setAttribute("data-price", newPrice);
  }
  
  // Existing functions for quantity increment and decrement
  function increment() {
    let quantity = document.getElementById("quantity").value;
    document.getElementById("quantity").value = parseInt(quantity) + 1;
  }
  
  function decrement() {
    let quantity = document.getElementById("quantity").value;
    if (quantity > 1) {
      document.getElementById("quantity").value = parseInt(quantity) - 1;
    }
  }
  