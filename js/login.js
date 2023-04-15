window.addEventListener('DOMContentLoaded', (event) => {
const emailInput = document.getElementById('typeEmailX-2');
const passwordInput = document.getElementById('typePasswordX-2');
const loginButton = document.querySelector('button[type="submit"]');

loginButton.addEventListener('click', (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (!email || !password) {
    alert('Please enter both email and password');
    return;
  }

  // Check if email is valid
  if (!isValidEmail(email)) {
    alert('Please enter a valid email address');
    return;
  }

  // Check if password and email is correct
  if (password !== 'codeofduty' || email !== 'codeofduty@rajalakshmi.org') {
    alert('Incorrect password or Email');
    return;
  }
  else {
      alert('Logged in successfully');
      window.location.href = "welcome.html";
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
});