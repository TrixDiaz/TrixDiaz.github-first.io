console.log("Welcome to Console");

// Define the arrow function to toggle light mode
const mode = () => {
  // Toggle the 'light-mode' class on the body element
  const body = document.body;
  const changeIcon = document.getElementById('icon');
  body.classList.toggle('light-mode');

   const isLightkMode = body.classList.contains('light-mode');
   changeIcon.classList = isLightkMode
      ? 'bi bi-moon-stars-fill' 
      : 'bi bi-brightness-high' 
      changeIcon.style.transition = "2s ease";
};

// Add a click event listener to the icon element
const icon = document.getElementById('icon');
icon.addEventListener('click', mode);
