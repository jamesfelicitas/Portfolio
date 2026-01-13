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