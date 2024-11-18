function loadProducts() {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const tbody = document.getElementById("productsTable").querySelector("tbody");
  tbody.innerHTML = "";

  products.forEach((product, index) => {
    const row = document.createElement("tr");
    row.style.width = "100%";
    row.innerHTML = `
          <td>${product.name}</td>
          <td>₹${product.price}</td>
          <td>${product.description}</td>
          <td>
            <button class="btn btn-danger btn-sm" onclick="deleteProduct(${index})">Delete</button>
          </td>
        `;
    tbody.appendChild(row);
  });
}

function deleteProduct(index) {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  loadProducts();
}

function editProduct(index) {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  const product = products[index];
  window.location.href = `admin_edit_product.html?index=${index}`;
}

document.addEventListener("DOMContentLoaded", loadProducts);
