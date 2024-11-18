// Dynamically load header and footer
document.addEventListener("DOMContentLoaded", () => {
  // Load header
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("headerContainer").innerHTML = data;
      initializeHeader(); // Initialize header functionality after loading
    })
    .catch((err) => console.error("Failed to load header:", err));

  // Load footer
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footerContainer").innerHTML = data;
    })
    .catch((err) => console.error("Failed to load footer:", err));
});

// Initialize header functionality
function initializeHeader() {
  const userName = document.getElementById("userName");
  const loginLink = document.getElementById("loginLink");
  const logoutLink = document.getElementById("logoutLink");

  // Retrieve the logged-in user from localStorage
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (user) {
    // Show the user's name and logout option
    userName.textContent = `Welcome, ${user.name}`;
    loginLink.classList.add("d-none");
    logoutLink.classList.remove("d-none");

    // Logout functionality
    logoutLink.addEventListener("click", () => {
      localStorage.removeItem("loggedInUser"); // Remove user data
      location.reload(); // Reload the page
      window.location.href = "../user/login.html";
    });
  } else {
    // Show login option
    userName.textContent = "";

    loginLink.classList.remove("d-none");
    logoutLink.classList.add("d-none");
    // window.location.href = "../user/login.html";
  }
}
