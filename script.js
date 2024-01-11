// Check to see if Javascript loaded
console.log('Script loaded');

document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic Active Navigation Link Highlighting
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav ul li a');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });
        navLi.forEach(li => {
            li.classList.remove('active');
            if (li.href.includes(current)) {
                li.classList.add('active');
            }
        });
    });

    // Portfolio Gallery (Assuming you have a modal or similar for viewing portfolio items)
    // Implementation depends on your HTML structure for the portfolio.

    // Contact Form Validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Validate form fields here
        // Example: Check if the email field is empty
        const email = form.querySelector('input[type="email"]');
        if (!email.value) {
            alert('Please enter your email address');
            return false;
        }
        // Further validation logic here...
        this.submit();
    });

    // Responsive Menu Toggle
    const navToggle = document.querySelector('.nav-toggle');
    navToggle.addEventListener('click', () => {
        const nav = document.querySelector('nav ul');
        nav.classList.toggle('active');
    });
});
