document.getElementById("addProductForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const product = {
    name: document.getElementById("productName").value,
    price: parseFloat(document.getElementById("productPrice").value),
    image: document.getElementById("productImage").value,
    stock: parseInt(document.getElementById("productStock").value),
    description: document.getElementById("productDescription").value,
    offer: parseInt(document.getElementById("productOffer").value) || 0, // Default to 0 if empty
    category: document.getElementById("productCategory").value, // Get selected category
  };

  let products = JSON.parse(localStorage.getItem("products")) || [];
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));

  alert("Product added successfully!");
  e.target.reset();
});
