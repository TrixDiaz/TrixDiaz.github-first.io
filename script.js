console.log("Welcome to Console");

// Define the arrow function to toggle light mode
const mode = () => {
  // Toggle the 'light-mode' class on the body element
  const body = document.body;
  const changeIcon = document.getElementById("icon");
  body.classList.toggle("light-mode");

  const isLightMode = body.classList.contains("light-mode");
  changeIcon.classList = isLightMode
    ? "bi bi-moon-stars-fill"
    : "bi bi-brightness-high";
  menuChangeIcon.classList = isLightMode
    ? "bi bi-moon-stars-fill"
    : "bi bi-brightness-high";
  changeIcon.style.transition = "1s ease";
};

// Define the arrow function to toggle open navigation
const toggleNav = () => {
  const toggleNav = document.getElementById("toggle-nav");

  const isOpen = toggleNav.classList.toggle("open");
  toggleMenu.classList = isOpen ? "bi bi-x-lg" : "bi bi-list-nested";
  toggleMenu.style.transition = "2s ease";
};

// Add a click event listener to the icon element
const icon = document.getElementById("icon");
icon.addEventListener("click", mode);

// Add a click event listener to the toggle menu element
const toggleMenu = document.getElementById("toggle-menu");
toggleMenu.addEventListener("click", toggleNav);

// Loop Typing Text
const texts = ["Developer", "IT Specialist", "UI/UX Designer", "IT Technician"];

const typingSpeed = 100; // Adjust this value to control the typing speed (in milliseconds)

const typingElement = document.getElementById("typing-text");

// Define function typeText
function typeText(text, index) {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(() => typeText(text, index), typingSpeed);
  } else {
    setTimeout(() => {
      typingElement.textContent = ""; // Clear the text content after the whole text is typed

      // Move to the next text in the array
      const nextIndex = (texts.indexOf(text) + 1) % texts.length;
      typeText(texts[nextIndex], 0);
    }, 1000); // Add a delay before starting the next loop
  }
}

typeText(texts[0], 0); // Start the typing animation with the first text

