// JavaScript functionality
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  // You can add your logic here to handle form submission (e.g., sending data to a server)
  // For this example, let's just log the form data to the console
  const formData = new FormData(event.target);
  for (let [name, value] of formData.entries()) {
    console.log(`${name}: ${value}`);
  }
  alert('Form submitted! Check the console for details.');
});
