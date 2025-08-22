const menuButton = document.querySelector('.menu-button');
const navLinks = document.getElementById('nav-links');

menuButton.addEventListener('click', () => {
	navLinks.classList.toggle('active');
	menuButton.classList.toggle('active');
});