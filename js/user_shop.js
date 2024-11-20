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
          "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/13-9340/media-gallery/gray/touch-oled/notebook-xps-13-9340-t-oled-gy-gallery-2.psd?fmt=pjpg&pscan=auto&scl=1&wid=3988&hei=2361&qlt=100,1&resMode=sharp2&size=3988,2361&chrss=full&imwidth=5000",
        stock: 15,
        description:
          "Powerful and portable laptop for everyday computing tasks, designed for multitasking.",
        offer: 15,
        category: "Electronics",
      },
      {
        name: "Men's T-Shirt",
        price: 499,
        image:
          "https://www.jiomart.com/images/product/original/rv1tjv00do/tazo-mens-round-neck-colourblocked-t-shirt-regular-fit-half-length-sleeve-t-shirt-t-shirt-for-mens-mens-t-shirt-mens-tshirt-tshirt-for-mens-t-shirts-tshirts-gym-wear-sports-wear-mens-tshirt-product-images-rv1tjv00do-0-202404151938.jpg?im=Resize=(500,630)",
        stock: 100,
        description:
          "Stylish and comfortable T-shirt made with premium cotton.",
        offer: 20,
        category: "Fashion",
      },
      {
        name: "Women's Handbag",
        price: 1599,
        image:
          "https://m.media-amazon.com/images/I/619ZVFGVGOL._AC_UY1000_.jpg",
        stock: 50,
        description: "Elegant and spacious handbag for daily essentials.",
        offer: 10,
        category: "Fashion",
      },
      {
        name: "The Great Gatsby",
        price: 299,
        image:
          "https://images-eu.ssl-images-amazon.com/images/I/71X7HnBk6VL._AC_UL600_SR600,600_.jpg",
        stock: 200,
        description: "Classic novel by F. Scott Fitzgerald.",
        offer: 5,
        category: "Books",
      },
      {
        name: "Cookbook: Quick Recipes",
        price: 499,
        image:
          "https://www.dairydiary.co.uk/wp-content/uploads/2018/05/Quick-After-Work-Spanish-Chicken.jpg",
        stock: 120,
        description: "Delicious and easy recipes for busy individuals.",
        offer: 10,
        category: "Books",
      },
      {
        name: "Skin Care Kit",
        price: 2499,
        image:
          "https://dhathriayurveda.in/cdn/shop/files/Summer-skin-care-kit-front-1.webp?v=1725625378",
        stock: 80,
        description: "Comprehensive skin care set for glowing skin.",
        offer: 15,
        category: "Beauty & Personal Care",
      },
      {
        name: "Hair Straightener",
        price: 999,
        image:
          "https://images-cdn.ubuy.co.in/63630a37761bb7074f311785-bcway-professional-hair-straightener.jpg",
        stock: 60,
        description: "Compact and efficient hair straightener for smooth hair.",
        offer: 20,
        category: "Beauty & Personal Care",
      },
      {
        name: "Microwave Oven",
        price: 8999,
        image:
          "https://www.lg.com/content/dam/channel/wcms/in/images/microwave-ovens/mc2886brum_dbkqiln_eail_in_c/gallery/MC2886BRUM-Microwave-ovens-Front-view-D-01.jpg",
        stock: 25,
        description: "Efficient and easy-to-use microwave oven.",
        offer: 10,
        category: "Home & Kitchen",
      },
      {
        name: "Dinnerware Set",
        price: 3999,
        image:
          "https://images.jdmagicbox.com/quickquotes/images_main/piccolo-40-pieces-melamine-dinner-set-rouge-blush-2221682151-9zy6cai0.jpg",
        stock: 40,
        description: "Elegant dinnerware set for a complete dining experience.",
        offer: 15,
        category: "Home & Kitchen",
      },
      {
        name: "Lego Building Set",
        price: 1999,
        image:
          "https://i0.wp.com/www.thebrickland.com/wp-content/uploads/2023/01/All-the-LEGO-Modular-Sets.001.jpeg?fit=1024%2C768&ssl=1",
        stock: 70,
        description: "Creative and fun Lego set for kids.",
        offer: 20,
        category: "Toys & Games",
      },
      {
        name: "Board Game: Monopoly",
        price: 1499,
        image:
          "https://5.imimg.com/data5/KD/ZA/VO/SELLER-6801296/monopoly-original-500x500.jpg",
        stock: 50,
        description: "Classic board game for family fun.",
        offer: 10,
        category: "Toys & Games",
      },
      {
        name: "Yoga Mat",
        price: 699,
        image: "https://m.media-amazon.com/images/I/41fQHCuWAsL.jpg",
        stock: 90,
        description: "Durable and anti-slip yoga mat.",
        offer: 20,
        category: "Sports & Outdoors",
      },
      {
        name: "Badminton Racket",
        price: 1299,
        image:
          "https://images-cdn.ubuy.co.in/633accf95a08947f10720e86-professional-carbon-fiber-badminton.jpg",
        stock: 40,
        description: "Lightweight and sturdy badminton racket.",
        offer: 15,
        category: "Sports & Outdoors",
      },
      {
        name: "First Aid Kit",
        price: 499,
        image:
          "https://cdn.prod.website-files.com/647888ca92d03e3fca3f1ea0/647888ca92d03e3fca3f23b9_shutterstock_426323305.jpg",
        stock: 100,
        description: "Essential first aid kit for emergencies.",
        offer: 10,
        category: "Health & Wellness",
      },
      {
        name: "Digital Thermometer",
        price: 299,
        image:
          "https://images-cdn.ubuy.co.in/6616bf059ba875268465e526-mabis-digital-thermometer-for-adults.jpg",
        stock: 120,
        description: "Fast and accurate digital thermometer.",
        offer: 15,
        category: "Health & Wellness",
      },
      {
        name: "Car Vacuum Cleaner",
        price: 1999,
        image: "https://m.media-amazon.com/images/I/61NGjKLwwZL.jpg",
        stock: 30,
        description: "Compact vacuum cleaner for car interiors.",
        offer: 20,
        category: "Automotive",
      },
      {
        name: "Car Phone Holder",
        price: 499,
        image: "https://img.fruugo.com/product/4/65/1559325654_max.jpg",
        stock: 70,
        description: "Secure and adjustable phone holder for cars.",
        offer: 10,
        category: "Automotive",
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
