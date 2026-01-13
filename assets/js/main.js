console.log("Portfolio loaded.");
console.log("Developer: James Felicitas");

// 1. Dynamic Year in Footer
document.getElementById('year').textContent = new Date().getFullYear();

// REMOVE OR COMMENT OUT THIS BLOCK SO FORMSPREE WORKS
/*
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop page reload
    
    // Simulate sending (alert for now)
    alert("Thanks for your message! This is a demo form.");
    
    // Clear the form
    this.reset();

    });
*/

/* ...existing code... */

// 3. Simple Scroll Reveal Animation
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

const animatedElements = document.querySelectorAll('section, .project-card, .skill-icon');
animatedElements.forEach(el => {
    el.classList.add('fade-in-section'); // Add base class
    observer.observe(el);
});