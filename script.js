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

document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    try {
        const response = await fetch('https://c2r8l4l33e.execute-api.us-east-1.amazonaws.com/Prod', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, message })
        });

        if (response.ok) {
            console.log('Email sent successfully');
            // Handle success (e.g., show a success message)
        } else {
            console.error('Error sending email');
            // Handle error (e.g., show an error message)
        }
    } catch (error) {
        console.error('Network error:', error);
        // Handle network error
    }
});
