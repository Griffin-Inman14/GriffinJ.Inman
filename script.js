// script.js

// Smooth scrolling and navigation functionality

document.addEventListener('DOMContentLoaded', function() {
    // Select all links that have hashes
    const links = document.querySelectorAll('a[href*="#"]');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            const hash = this.hash;

            // Using scrollIntoView for smooth scrolling
            if (hash) {
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});