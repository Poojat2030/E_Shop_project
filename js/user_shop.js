const productsContainer = document.getElementById("productsContainer");
const categoryFilter = document.getElementById("categoryFilter");

let allProducts = [];

// Load products from localStorage or default list
function loadProducts() {
  allProducts = JSON.parse(localStorage.getItem("products")) || [];
  if (allProducts.length === 0) {
    allProducts = [
      {
        name: "Lenovo Mobile",
        price: 7999,
        image:
          "https://5.imimg.com/data5/RP/QP/GLADMIN-52197454/lenovo-k8-note-mobile-phone.png",
        stock: 30,
        description:
          "New model in the market with advanced features like fast charging, high resolution camera, and much more!",
        offer: 10,
        category: "Electronics",
      },
      {
        name: "Dell Laptop",
        price: 45999,
        image:
          "https://cdn.pixabay.com/photo/2015/03/26/09/40/laptop-690915_1280.jpg",
        stock: 15,
        description:
          "Powerful and portable laptop for everyday computing tasks, designed for multitasking.",
        offer: 15,
        category: "Electronics",
      },
    ];
    localStorage.setItem("products", JSON.stringify(allProducts));
  }
  displayProducts(allProducts);
}

// Display filtered products
function displayProducts(products) {
  productsContainer.innerHTML = ""; // Clear container

  if (products.length === 0) {
    productsContainer.innerHTML = `<p class="text-center text-muted">No products found.</p>`;
    return;
  }

  products.forEach((product, index) => {
    const productCard = document.createElement("div");
    productCard.className = "col-md-4 mb-4";

    productCard.innerHTML = `
      <div class="card shadow-lg product-card">
        <img src="${product.image}" class="card-img-top" alt="${product.name}" />
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.description}</p>
          <span class="badge bg-primary">${product.category}</span>
          <span class="badge bg-success">${product.stock} in stock</span>
          <span class="badge bg-warning">${product.offer}% off</span>
          <p class="text-muted mt-2"><strong>Price:</strong> ₹${product.price}</p>
          <button class="btn btn-primary w-100" onclick="addToCart(${index})">Add to Cart</button>
        </div>
      </div>
    `;
    productsContainer.appendChild(productCard);
  });
}

// Filter products by category
function filterProducts() {
  const selectedCategory = categoryFilter.value;

  const filteredProducts = allProducts.filter((product) => {
    return selectedCategory === "" || product.category === selectedCategory;
  });

  displayProducts(filteredProducts);
}

// Add product to cart
function addToCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = allProducts[index];

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} has been added to your cart!`);
}

// Initialize the shop
document.addEventListener("DOMContentLoaded", () => {
  loadProducts();
  categoryFilter.addEventListener("change", filterProducts);
});
