// Initialize the cart array
let cart = [];

// Function to add products to the cart
function addToCart(product) {
    // Load the cart from localStorage or initialize it
    cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product already exists in the cart
    const productExists = cart.find(item => item.id === product.id);

    if (productExists) {
        // If the product already exists, increase the quantity
        productExists.quantity++;
    } else {
        // If the product is new to the cart, add it with a quantity of 1
        cart.push({ ...product, quantity: 1 });
    }

    // Save the cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Optional: Provide feedback to the user
    alert(`${product.name} has been added to your cart.`);
}

// Add event listeners to "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const img = button.getAttribute('data-img');
        const id = button.getAttribute('data-id');
        const name = button.getAttribute('data-name');
        const price = button.getAttribute('data-price');

        // Create a product object
        const product = { id, name, price: parseFloat(price) };

        // Add the product to the cart
        addToCart(product);
    });
});