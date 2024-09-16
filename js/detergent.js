const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd2gWO01zlaxoCHD10FYDRFzTND2sYvhY5yA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQc0x-6nO9_JUj-zims9LrGhfHZBE0R5NCQ&s",
  "https://cdn.thewirecutter.com/wp-content/media/2024/06/laundrydetergents-2048px-persilpr.jpg?auto=webp&quality=60&width=570",
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
  "1ltr": 2.50,
  "5ltr": 5.00,
  "10ltr": 9.50
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