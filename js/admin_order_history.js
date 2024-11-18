// Retrieve orders data from localStorage
function loadOrders() {
  const ordersListContainer = document.getElementById("ordersList");
  ordersListContainer.innerHTML = ""; // Clear any existing orders

  // Check if orders data exists in localStorage
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  if (orders.length === 0) {
    ordersListContainer.innerHTML = "<p>No orders found</p>";
  } else {
    orders.forEach((order, index) => {
      const totalPrice = order.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      const orderDate = new Date(order.date).toLocaleDateString();

      const orderCard = document.createElement("div");
      orderCard.className = "col-md-4";
      orderCard.innerHTML = `
          <div class="card shadow-sm">
            <img src="${
              order.items[0].image
            }" class="card-img-top" alt="Order Item" />
            <div class="card-body">
              <h5 class="card-title">Order #${index + 1}</h5>
              <p><strong>Address:</strong> ${order.address}</p>
              <p><strong>Payment Method:</strong> ${order.paymentMethod}</p>
              <p><strong>Total Price:</strong> ₹${totalPrice}</p>
              <p><strong>Date:</strong> ${orderDate}</p>
              <button class="view-button" onclick="viewOrder(${index})">View Order</button>
            </div>
          </div>
        `;
      ordersListContainer.appendChild(orderCard);
    });
  }
}

function viewOrder(orderIndex) {
  // Store the selected order details in localStorage and navigate to the detail page
  const orders = JSON.parse(localStorage.getItem("orders"));
  localStorage.setItem("orderDetails", JSON.stringify(orders[orderIndex]));
  window.location.href = "order_detail.html"; // Redirect to Order Detail Page
}

loadOrders();
