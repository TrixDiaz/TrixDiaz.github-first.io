console.log("Welcome to Console");

// Define the arrow function to toggle light mode
const mode = () => {
  // Toggle the 'light-mode' class on the body element
  const body = document.body;
  body.classList.toggle('light-mode');

   // Store the user's preference in local storage
   const isLightkMode = body.classList.contains('light-mode');
   localStorage.setItem('lightMode', isLightMode);
};

// Add a click event listener to the icon element
const icon = document.getElementById('icon');
icon.addEventListener('click', mode);