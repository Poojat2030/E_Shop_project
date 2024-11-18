const cartItemsContainer = document.getElementById("cartItems");
const totalPriceElement = document.getElementById("totalPrice");
const buyNowButton = document.getElementById("buyNow");
const modalTotalPrice = document.getElementById("modalTotalPrice");

function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartItemsContainer.innerHTML = "";
  let totalPrice = 0;

  cart.forEach((item, index) => {
    if (!item.quantity) item.quantity = 1; // Default quantity is 1
    const totalItemPrice = item.price * item.quantity;
    totalPrice += totalItemPrice;

    const itemCard = document.createElement("div");
    itemCard.className = "col-md-4";
    itemCard.innerHTML = `
      <div class="card shadow-sm">
        <img src="${item.image}" class="card-img-top" alt="${item.name}" />
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">Price: ₹${item.price}</p>
          <div class="d-flex justify-content-between align-items-center">
            <button class="btn btn-sm btn-danger" onclick="decreaseQuantity(${index})">-</button>
            <span class="mx-2">${item.quantity}</span>
            <button class="btn btn-sm btn-success" onclick="increaseQuantity(${index})">+</button>
          </div>
          <p class="mt-2 text-muted">Subtotal: ₹${totalItemPrice}</p>
          <button class="btn btn-danger w-100 mt-2" onclick="removeFromCart(${index})">Remove</button>
        </div>
      </div>
    `;
    cartItemsContainer.appendChild(itemCard);
  });

  totalPriceElement.textContent = totalPrice;
}

function updateCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function increaseQuantity(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].quantity += 1;
  updateCart(cart);
}

function decreaseQuantity(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
    updateCart(cart);
  } else {
    removeFromCart(index);
  }
}

function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  updateCart(cart);
}

buyNowButton.addEventListener("click", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  modalTotalPrice.textContent = total;

  const modal = new bootstrap.Modal(document.getElementById("checkoutModal"));
  modal.show();
});

document.getElementById("checkoutForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const address = document.getElementById("address").value;
  const paymentMethod = document.getElementById("paymentMethod").value;
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const order = { address, paymentMethod, items: cart, date: new Date() };
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  // Display congratulations animation
  const congratulationsOverlay = document.getElementById(
    "congratulationsOverlay"
  );
  congratulationsOverlay.classList.remove("d-none");
  congratulationsOverlay.classList.add("show");

  // Redirect after 3 seconds
  setTimeout(() => {
    congratulationsOverlay.classList.remove("show");
    window.location.href = "shop.html";
  }, 3000);

  // Clear cart
  localStorage.removeItem("cart");
  loadCart();

  const modal = bootstrap.Modal.getInstance(
    document.getElementById("checkoutModal")
  );
  modal.hide();
});

// Initial cart loading
loadCart();
