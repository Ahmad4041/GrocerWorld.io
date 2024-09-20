// Function to update the cart icon counter
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cart-count').textContent = totalItems;
}

// Call this function on page load to show the current cart count

  updateCartCount();


// Modified addToCart function to update the cart counter
function addToCart(button) {
  const id = button.getAttribute('data-id');
  const name = button.getAttribute('data-name');
  const price = parseFloat(button.getAttribute('data-price'));
  const quantity = 1;  // Default quantity to 1 on add to cart from product page

  // Load existing cart from localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if product already exists in the cart
  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
      // Update quantity if the item already exists
      existingItem.quantity += quantity;
  } else {
      // Add new product to cart
      cart.push({ id, name, price, quantity });
  }

  // Save updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Update the cart count icon
  updateCartCount();

  alert(`${name} has been added to your cart.`);
}
