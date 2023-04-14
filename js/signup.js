window.addEventListener('DOMContentLoaded', (event) => {
const usernameInput = document.getElementById('form3Example1c');
const emailInput = document.getElementById('form3Example3c');
const passwordInput = document.getElementById('form3Example4c');
const confirmPasswordInput = document.getElementById('form3Example4cd');
const registerButton = document.getElementById('button');

registerButton.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  if (username === '' || email === '' || password === '' || confirmPassword === '') {
    alert('Please fill in all fields.');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }
  else {
    alert('Registration successful.');
    window.location.href = "login.html";
  }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
