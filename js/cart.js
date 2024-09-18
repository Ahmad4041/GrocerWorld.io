function updateCart() {
  let subtotal = 0;
  document.querySelectorAll('.quantity').forEach(function(input) {
    const price = parseFloat(input.getAttribute('data-price'));
    const quantity = parseInt(input.value);
    const itemSubtotal = price * quantity;
    input.closest('tr').querySelector('.item-subtotal').textContent = `$${itemSubtotal.toFixed(2)}`;
    subtotal += itemSubtotal;
  });
  document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
  const totalValue = subtotal + 60 + 20; // Shipping and VAT
  document.getElementById('totalValue').textContent = `$${totalValue.toFixed(2)}`;
}

function updateQuantity(button, increment) {
  const quantityInput = button.closest('.quantity-controls').querySelector('.quantity');
  let quantity = parseInt(quantityInput.value);
  quantity = quantity + increment;
  if (quantity < 1) quantity = 1; // Ensure quantity can't go below 1
  quantityInput.value = quantity;
  updateCart(); // Automatically update the cart when quantity changes
}

function removeItem(id) {
  document.querySelector(`tr[data-id="${id}"]`).remove();
  updateCart();
}

function checkout() {
  if (!document.getElementById('termsCheck').checked) {
    alert("Please agree to the terms and conditions before proceeding.");
  } else {
    alert("Proceeding to checkout...");
    // Add your checkout logic here
  }
}




// cart.js


// Function to display cart items
function displayCart() {
const cartItemsDiv = document.getElementById('cart-items');
const cartTotalDiv = document.getElementById('cart-total');
cartItemsDiv.innerHTML = '';
cartTotalDiv.innerHTML = '';

// Load the cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

if (cart.length === 0) {
    cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
    return;
}

let totalPrice = 0;

cart.forEach(item => {
    const productElement = document.createElement('div');
    productElement.className = 'cart-item';
    productElement.innerHTML = `
        <p>${item.name} - $${item.price} (Quantity: ${item.quantity})</p>
        <button class="remove-item" data-id="${item.id}">Remove</button>
    `;
    cartItemsDiv.appendChild(productElement);

    totalPrice += item.price * item.quantity;
});

cartTotalDiv.innerHTML = `<h3>Total: $${totalPrice.toFixed(2)}</h3>`;

// Add event listeners to remove buttons
const removeButtons = document.querySelectorAll('.remove-item');
removeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const id = button.getAttribute('data-id');
        removeFromCart(id);
    });
});
}

// Function to remove items from the cart
function removeFromCart(id) {
let cart = JSON.parse(localStorage.getItem('cart')) || [];
cart = cart.filter(item => item.id !== id);
localStorage.setItem('cart', JSON.stringify(cart));
displayCart();
}

// Display the cart when the page loads
window.onload = displayCart;





