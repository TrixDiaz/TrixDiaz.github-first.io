console.log("Welcome to Console");

// Define the arrow function to toggle light mode
const mode = () => {
  // Toggle the 'light-mode' class on the body element
  const body = document.body;
  const changeIcon = document.getElementById('icon');
  const menuChangeIcon = document.getElementById('menu-icon');
  body.classList.toggle('light-mode');

   const isLightMode = body.classList.contains('light-mode');
   changeIcon.classList = isLightMode
      ? 'bi bi-moon-stars-fill' 
      : 'bi bi-brightness-high' 
   menuChangeIcon.classList = isLightMode
      ? 'bi bi-moon-stars-fill' 
      : 'bi bi-brightness-high' 
      changeIcon.style.transition = "1s ease";
};

// Define the arrow function to toggle open navigation
const toggleNav = () => {
  const toggleNav = document.getElementById('toggle-nav');

  const isOpen = toggleNav.classList.toggle('open')
  toggleMenu.classList = isOpen
    ? 'bi bi-x-lg'
    : 'bi bi-list-nested'
    toggleMenu.style.transition = "2s ease";
   

};

// Add a click event listener to the icon element
const icon = document.getElementById('icon');
icon.addEventListener('click', mode);

// Add a click event listener to the menu icon element
const menuIcon = document.getElementById('menu-icon');
menuIcon.addEventListener('click', mode);

// Add a click event listener to the toggle menu element
const toggleMenu = document.getElementById('toggle-menu');
toggleMenu.addEventListener('click', toggleNav);
