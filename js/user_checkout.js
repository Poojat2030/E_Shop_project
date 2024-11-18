document.getElementById("checkoutForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Order placed successfully!");
  localStorage.removeItem("cart");
  window.location.href = "shop.html";
});
