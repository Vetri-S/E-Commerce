
let cart = JSON.parse(localStorage.getItem("cart")) || [];
document.getElementById("cart-count") &&
  (document.getElementById("cart-count").innerText = cart.length);

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
  document.getElementById("cart-count").innerText = cart.length;
}

function displayCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-items");

  if (cartItems.length === 0) {
    container.innerHTML = "<p>Your cart is empty</p>";
    return;
  }

  let html = "";
  let total = 0;

  cartItems.forEach((item, index) => {
    total += item.price;
    html += `<div>
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
      </div>`;
  });

  html += `<h3>Total: ₹${total}</h3>`;
  container.innerHTML = html;
}

// LOGIN/SIGNUP
function signupUser() {
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;
  localStorage.setItem("user", JSON.stringify({ username, password }));
  alert("Signup successful! Please login.");
  window.location.href = "login.html";
  return false;
}

function loginUser() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  const stored = JSON.parse(localStorage.getItem("user"));

  if (stored && stored.username === username && stored.password === password) {
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid credentials!");
  }
  return false;
}
