const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
	navLinks.classList.toggle('active');
	menuIcon.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.slide');
    const navLinks = document.querySelectorAll('nav ul li a');

    const observer = new IntersectionObserver(sections => {
        sections.forEach(sec => {
            if (sec.isIntersecting) {
                // Get the id of the intersecting section
                const id = sec.target.getAttribute('id');

                // Remove 'active' class from all nav links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Add 'active' class to the corresponding nav link
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.5 // Adjust this threshold as needed (0.5 means 50% of the section is visible)
    });

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});