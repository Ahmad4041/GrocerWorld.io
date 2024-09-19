// Function to add a product to the cart
function addToCart(button) {
    const id = button.getAttribute('data-id');
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));
    const quantity = parseInt(document.getElementById('quantity').value) || 1;
  
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
  
    alert(`${name} has been added to your cart.`);
  }
  