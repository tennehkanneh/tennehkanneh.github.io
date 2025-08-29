const menuIcon = document.getElementById('menu-button');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
	navLinks.classList.toggle('active');
	menuIcon.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.slide');
    const navLinks = document.querySelectorAll('nav ul li a');

    const observer = new IntersectionObserver(entries => {
        let visibleSection = null;

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                visibleSection = entry.target;
            }
        });

        if (visibleSection) {
            const id = visibleSection.getAttribute('id');

            // Remove all actives first
            navLinks.forEach(link => link.classList.remove('active'));

            // Highlight the matching one
            const activeLink = document.querySelector(`nav ul li a[href="#${id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));
});


window.addEventListener("DOMContentLoaded", () => {
    if (window.location.hash === "#resume") {
      window.location.href = "assets/resume.pdf";
    }
  });