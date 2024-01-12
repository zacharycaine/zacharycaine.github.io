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

        // Parallax Scrolling Effect
        applyParallaxEffect();
    });

    // Contact Form Validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = form.querySelector('input[type="email"]');
        if (!email.value) {
            alert('Please enter your email address');
            return false;
        }
        this.submit();
    });

    // Responsive Menu Toggle
    const navToggle = document.querySelector('.menu-button');
    navToggle.addEventListener('click', () => {
        const nav = document.querySelector('nav ul');
        nav.classList.toggle('active');
    });

    // Parallax effect function
    function applyParallaxEffect() {
        var rightSide = document.querySelector('.right-side');

        // Adjust the multiplier for a faster parallax effect on the right side
        var parallaxOffset = window.pageYOffset * 0.8; // Adjust this to make the right side move faster

        // Apply the effect only when in column mode (narrow screen)
        if (window.innerWidth <= 768) {
            rightSide.style.transform = 'translateY(-' + parallaxOffset + 'px)';
        } else {
            rightSide.style.transform = 'translateY(0px)';
        }
    }

    // Initial parallax effect application
    applyParallaxEffect();
});
