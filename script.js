// script.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // stop actual form submit
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  
  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }
  
  // Simple email format check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  
  alert(`Thank you, ${name}! Your message has been sent.`);
  
  // Reset form
  this.reset();
});
