// Retrieve order details from localStorage
const orderDetails = JSON.parse(localStorage.getItem("orderDetails"));

function loadOrderDetails() {
  const orderDetailContainer = document.getElementById("orderDetail");
  orderDetailContainer.innerHTML = ""; // Clear any existing content

  const totalPrice = orderDetails?.items?.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const orderDate = new Date(orderDetails.date).toLocaleDateString();

  const orderInfoCard = document.createElement("div");
  orderInfoCard.className = "col-md-12";
  orderInfoCard.innerHTML = `
    <div class="card shadow-sm">
      <div class="card-body">
        <h5 class="card-title">Order Details</h5>
        <p><strong>Address:</strong> ${orderDetails.address}</p>
        <p><strong>Payment Method:</strong> ${orderDetails.paymentMethod}</p>
        <p><strong>Date:</strong> ${orderDate}</p>
        <p><strong>Total Price:</strong> ₹${totalPrice}</p>
      </div>
    </div>
  `;
  orderDetailContainer.appendChild(orderInfoCard);

  orderDetails.items.forEach((item) => {
    const itemCard = document.createElement("div");
    itemCard.className = "col-md-4";
    itemCard.innerHTML = `
      <div class="card shadow-sm">
        <img src="${item.image}" class="card-img-top" alt="${item.name}" />
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p><strong>Description:</strong> ${item.description}</p>
          <p><strong>Quantity:</strong> ${item.quantity}</p>
          <p><strong>Price:</strong> ₹${item.price}</p>
        </div>
      </div>
    `;
    orderDetailContainer.appendChild(itemCard);
  });
}

loadOrderDetails();
