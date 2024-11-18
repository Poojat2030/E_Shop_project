document.addEventListener("DOMContentLoaded", () => {
  const userLoginForm = document.getElementById("userLoginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  // Dummy user data (add to localStorage if not present)
  if (!localStorage.getItem("users")) {
    const defaultUsers = [
      {
        name: "John Doe",
        email: "john@example.com",
        password: btoa("password123"),
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        password: btoa("mypassword"),
      },
      {
        name: "Pooja Todmal",
        email: "pooja@gmail.com",
        password: btoa("123456"),
      },
    ];
    localStorage.setItem("users", JSON.stringify(defaultUsers));
  }

  userLoginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Reset error messages
    emailError.textContent = "";
    passwordError.textContent = "";

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    let valid = true;

    // Validation
    if (!email) {
      emailError.textContent = "Email is required.";
      valid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      emailError.textContent = "Invalid email format.";
      valid = false;
    }

    if (!password) {
      passwordError.textContent = "Password is required.";
      valid = false;
    } else if (password.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters.";
      valid = false;
    }

    if (valid) {
      const users = JSON.parse(localStorage.getItem("users"));
      const user = users.find((u) => u.email === email);

      if (user) {
        if (user.password === btoa(password)) {
          // Save logged-in user to localStorage
          localStorage.setItem("loggedInUser", JSON.stringify(user));

          // Redirect to shop page
          window.location.href = "../user/shop.html";
        } else {
          passwordError.textContent = "Incorrect password.";
        }
      } else {
        emailError.textContent = "User not found.";
      }
    }
  });
});
