document.getElementById("adminLoginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "karuna@gmail.com" && password === "123") {
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials!");
  }
});
