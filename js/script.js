feather.replace();

// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Ketika tombol search di klik
const searchToggle = document.getElementById('searchToggle');
  const searchBox = document.getElementById('searchBox');

  // Toggle search box visibility on click
  searchToggle.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link action
    const isVisible = searchBox.style.display === 'block';
    searchBox.style.display = isVisible ? 'none' : 'block';
  });

  // Hide search box when clicking outside
  document.addEventListener('click', function (event) {
    if (!searchBox.contains(event.target) && !searchToggle.contains(event.target)) {
      searchBox.style.display = 'none';
    }
  });

// klik diluar side bar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});