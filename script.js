// Responsive Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const navToggle = document.createElement('div');
    navToggle.innerHTML = '&#9776;'; // Unicode for menu icon
    navToggle.className = 'nav-toggle';
    document.querySelector('header').insertBefore(navToggle, nav);

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});

// Ensure nav closes when a link is clicked in mobile view
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector('nav');
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
});
