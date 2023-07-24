console.log("Welcome to Console");
//Toggle Navigation Icon 
const icon = document.getElementById('navIcon');
const links = document.getElementById('links');
const bootStrapIcon = document.getElementById('icons');

  icon.addEventListener('click', () => {
 const toggle =  links.classList.toggle('links-toggle'); 
  bootStrapIcon.classList = toggle
      ? 'bi bi-x-lg' 
      : 'bi bi-list-nested'
    });