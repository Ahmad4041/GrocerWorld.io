const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzJykcdPepjnj5YQNtgCGrgmYPgB6j0vnoQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtCYcxkoOO51VAJiluk1y5oX_t-RZEWXjQyA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVUCHZqbMJFhU5BQsaQEaMdIQThqwAXiRZUQ&s",
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

