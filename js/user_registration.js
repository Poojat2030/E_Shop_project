document.addEventListener("DOMContentLoaded", () => {
  const userRegistrationForm = document.getElementById("userRegistrationForm");
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const usernameError = document.getElementById("usernameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  userRegistrationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Reset error messages
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
    let valid = true;

    // Validation
    if (!username) {
      usernameError.textContent = "Username is required.";
      valid = false;
    }

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

    if (!confirmPassword) {
      confirmPasswordError.textContent = "Please confirm your password.";
      valid = false;
    } else if (confirmPassword !== password) {
      confirmPasswordError.textContent = "Passwords do not match.";
      valid = false;
    }

    if (valid) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const newUser = {
        name: username,
        email: email,
        password: btoa(password),
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      alert("Account created successfully!");
      window.location.href = "../user/login.html";
    }
  });
});
