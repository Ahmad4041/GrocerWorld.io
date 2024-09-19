const images = [
    "./images/ad-image-3.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJVGbI4pBbCqLyqDe64U1LGqBn9lP6aRMeaQ&s",
    "https://media.istockphoto.com/id/498916042/photo/vanilla-ice-cream-in-cup.jpg?s=612x612&w=0&k=20&c=MLibzOp-jPGE0Uz9DcAycwyWnpLSoWR4d1x-9Nqb7Zw=",
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
        "1litr": 2.00,
        "2litr": 4.00,
        "5litr": 10.00
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
      