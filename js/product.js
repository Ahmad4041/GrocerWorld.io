
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cart-count').textContent = totalItems;
}



  updateCartCount();



function addToCart(button) {
  const id = button.getAttribute('data-id');
  const name = button.getAttribute('data-name');
  const price = parseFloat(button.getAttribute('data-price'));
  const quantity = parseInt(document.getElementById('quantity').value);


 
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

 
  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    
      existingItem.quantity += quantity;
  } else {
     
      cart.push({ id, name, price, quantity });
  }

 
  localStorage.setItem('cart', JSON.stringify(cart));

  
  updateCartCount();

  alert(`${name} has been added to your cart.`);
}


  
      
     