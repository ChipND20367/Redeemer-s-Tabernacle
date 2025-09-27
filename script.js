// Current year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form handler
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  status.textContent = '';

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    status.textContent = "Please fill in all fields.";
    status.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    status.textContent = "Enter a valid email.";
    status.style.color = "red";
    return;
  }

  status.textContent = "Sending...";
  status.style.color = "blue";

  setTimeout(() => {
    status.textContent = "Thank you! We'll be in touch God bless.";
    status.style.color = "green";
    form.reset();
  }, 1000);
});
