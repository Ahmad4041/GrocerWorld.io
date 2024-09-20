// Function to update the cart (quantities, subtotal, etc.)
function updateCart() {
  let subtotal = 0;
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  cart.forEach(item => {
    const quantityInput = document.querySelector(`input[data-id="${item.id}"]`);
    item.quantity = parseInt(quantityInput.value);
    const itemSubtotal = item.price * item.quantity;
    document.querySelector(`.item-subtotal[data-id="${item.id}"]`).textContent = `$${itemSubtotal.toFixed(2)}`;
    subtotal += itemSubtotal;
  });

  localStorage.setItem('cart', JSON.stringify(cart));  // Save updated cart
  document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
  const totalValue = subtotal + 60 + 20;  // Add Shipping and VAT
  document.getElementById('totalValue').textContent = `$${totalValue.toFixed(2)}`;
}

// Function to display cart items from localStorage
function displayCart() {
  const cartItemsDiv = document.getElementById('cartItems');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = '<tr><td colspan="4">Your cart is empty.</td></tr>';
    return;
  }

  cartItemsDiv.innerHTML = '';
  cart.forEach(item => {
    const itemRow = document.createElement('tr');
    itemRow.setAttribute('data-id', item.id);
    itemRow.innerHTML = `
      <td>
        <div class="d-flex">
          <img src="./images/ad-image-${item.id}.png" alt="${item.name}" style="width: 80px; margin: 20px;">
          <div>
            <h6>${item.name}</h6>
            <small>$${item.price}</small>
          </div>
        </div>
      </td>
      <td class="quantity-controls">
        <button class="btn-minus" onclick="updateQuantity(this, -1, ${item.id})">-</button>
        <input type="number" class="form-control quantity" value="${item.quantity}" min="1" data-id="${item.id}" data-price="${item.price}" readonly>
        <button class="btn-plus" onclick="updateQuantity(this, 1, ${item.id})">+</button>
      </td>
      <td class="item-subtotal" data-id="${item.id}">$${(item.price * item.quantity).toFixed(2)}</td>
      <td><button class="delete-btn" onclick="removeItem(${item.id})"><i class="fas fa-trash"></i></button></td>
    `;
    cartItemsDiv.appendChild(itemRow);
  });

  updateCart();  // Update subtotal and total value
}


// Function to remove items from the cart
// function removeItem(id) {
//   let cart = JSON.parse(localStorage.getItem('cart')) || [];
//   cart = cart.filter(item => item.id !== id);
//   localStorage.setItem('cart', JSON.stringify(cart));
//   displayCart();
// }

// Update quantity (increase or decrease)
function updateQuantity(button, increment) {
  const quantityInput = button.closest('.quantity-controls').querySelector('input');
  let quantity = parseInt(quantityInput.value);
  quantity = quantity + increment;
  if (quantity < 1) quantity = 1;  // Ensure minimum quantity of 1
  quantityInput.value = quantity;
  updateCart();  // Update cart after quantity change
}

// Checkout function
function checkout() {
  if (!document.getElementById('termsCheck').checked) {
    alert("Please agree to the terms and conditions before proceeding.");
  } else {
    alert("Proceeding to checkout...");
    // Add checkout logic here
  }
}



// Modified removeItem function to update the cart counter
function removeItem(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));

  // Update the cart count icon
  updateCartCount();

  displayCart(); // Refresh the cart page
}


// Call this function on page load to show the current cart count
window.onload = function() {
  displayCart();
  updateCartCount();
 
}


// Display the cart when the page loads
// window.onload = displayCart;













