
/*
const cart = [];

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", function () {
    const productCard = this.parentElement;
    const productName =
      productCard.querySelector("span:first-child").textContent;
    const productPrice = parseFloat(
      productCard.querySelector(".price").textContent.replace("$", "")
    );

    // Add to cart array
    cart.push({
      name: productName,
      price: productPrice,
    });

    // Update UI
    updateCartUI();

    // Visual feedback
    const originalText = this.textContent;
    this.textContent = "✓ Added";
    this.style.background = "var(--success)";
    setTimeout(() => {
      this.textContent = originalText;
      this.style.background = "var(--accent)";
    }, 1500);
  });
});

function updateCartUI() {
  const cartItemsEl = document.getElementById("cartItems");
  const itemCountEl = document.getElementById("itemCount");
  const totalPriceEl = document.getElementById("totalPrice");

  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
  } else {
    let cartHTML = "";
    let total = 0;

    cart.forEach((item) => {
      cartHTML += `
                        <div class="product" style="margin: 10px 0; padding: 15px;">
                            <span>${item.name}</span>
                            <span class="price">$${item.price.toFixed(2)}</span>
                        </div>
                    `;
      total += item.price;
    });

    cartItemsEl.innerHTML = cartHTML;
  }

  // Update totals
  itemCountEl.textContent = cart.length;
  totalPriceEl.textContent = `$${cart
    .reduce((sum, item) => sum + item.price, 0)
    .toFixed(2)}`;
}
*/