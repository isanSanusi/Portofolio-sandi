// toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// ketika hamburger menu di klik
document.querySelector('#menu').
onclick = () => {
  navbarNav.classList.toggle('active');
};

// click di luar side bar untuk hilangkan menu
const hamburger = document.querySelector('#menu');

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  };
});