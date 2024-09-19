const images = [
    "data:image/jpeg;base64,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",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeWLv_AcjnQithuHxwUz7HYuNb5HqWCOgADQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6S1_hrd0JNPd1zXkyeXTkkiYw3UwhUZV4g&s ",
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
        "5litr": 5.00,
        "10litr": 10.00,
        "15litr": 15.00
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
      