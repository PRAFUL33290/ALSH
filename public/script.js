// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// CTA Button - Commencer maintenant
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.type === 'submit') return; // Skip for form submit buttons
        document.getElementById('contact').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    
    // Simple form validation
    if (name.trim() === '' || email.trim() === '') {
        alert('Veuillez remplir tous les champs');
        return;
    }
    
    // Simulate form submission
    const button = this.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = 'Message envoyé! ✓';
    button.disabled = true;
    
    // Reset form after 2 seconds
    setTimeout(() => {
        this.reset();
        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
});

// Add scroll animation for feature cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Navbar highlight on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
});

console.log('Landing page loaded successfully');
