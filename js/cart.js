// js/cart.js

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.add-to-cart');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const name = button.getAttribute('data-name');
      const price = parseFloat(button.getAttribute('data-price'));
      const image = button.getAttribute('data-image');

      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      const existingItem = cart.find(item => item.name === name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ name, price, image, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${name} added to cart!`);
      updateCartCount();
    });
  });
});
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const count = cart.reduce((acc, item) => acc + item.quantity, 0);
  const countElement = document.querySelector('.cart-count');

  if (countElement) {
    countElement.textContent = count;

    // Trigger pulse animation
    countElement.classList.remove('pulse');
    void countElement.offsetWidth; // Force reflow
    countElement.classList.add('pulse');
  }
}


// Call it once on page load
document.addEventListener('DOMContentLoaded', updateCartCount);
