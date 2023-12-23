
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  
  const formData = new FormData(event.target);
  for (let [name, value] of formData.entries()) {
    console.log(`${name}: ${value}`);
  }
  alert('Form submitted! Check the console for details.');
});
