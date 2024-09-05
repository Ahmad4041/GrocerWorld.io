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