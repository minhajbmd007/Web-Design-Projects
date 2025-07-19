// js/productPage.js

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"));
  const container = document.getElementById("product-details");

  const product = products.find(p => p.id === productId);

  if (!product) {
    container.innerHTML = "<h2>Product not found.</h2>";
    return;
  }

  container.innerHTML = `
    <div class="product-detail" style="display: flex; gap: 40px; flex-wrap: wrap;">
      <div>
        <img src="${product.image}" alt="${product.name}" style="width: 300px; border-radius: 8px;" />
      </div>
      <div>
        <h2>${product.name}</h2>
        <p style="font-size: 18px; margin-top: 10px;">${product.description}</p>
        <h3 style="margin-top: 20px;">$${product.price}</h3>
        <button class="add-to-cart"
          data-name="${product.name}"
          data-price="${product.price}"
          data-image="${product.image}">
          Add to Cart
        </button>
      </div>
    </div>
  `;

  // Hook into your existing cart script
  const button = document.querySelector(".add-to-cart");
  button.addEventListener("click", () => {
    const name = button.getAttribute("data-name");
    const price = parseFloat(button.getAttribute("data-price"));
    const image = button.getAttribute("data-image");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name, price, image, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added to cart!`);
    updateCartCount?.(); // optional if you're tracking count
  });
});
