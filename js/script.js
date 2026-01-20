// ==========================================
// EMAILJS CONFIGURATION
// ==========================================
// REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
const EMAILJS_PUBLIC_KEY = 'uaaK5lUB0n4zbzDw7';  // Replace with your Public Key
const EMAILJS_SERVICE_ID = 'service_ba5i7ua';  // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'template_117zzer'; // Replace with your Template ID

// Initialize EmailJS
(function() {
    emailjs.init(EMAILJS_PUBLIC_KEY);
})();

// ==========================================
// CONTACT FORM HANDLER
// ==========================================
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get button and show loading state
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Send email using EmailJS
        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, this)
            .then(function() {
                // Success
                formStatus.style.display = 'block';
                formStatus.style.color = '#4CAF50';
                formStatus.innerHTML = '<i class="fas fa-check-circle"></i> Message sent successfully! I\'ll get back to you soon.';
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
                
            }, function(error) {
                // Error
                formStatus.style.display = 'block';
                formStatus.style.color = '#f9004d';
                formStatus.innerHTML = '<i class="fas fa-exclamation-circle"></i> Oops! Something went wrong. Please try again or email me directly.';
                
                console.error('EmailJS Error:', error);
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Hide error message after 7 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 7000);
            });
    });
}

// ==========================================
// NEWSLETTER FORM HANDLER
// ==========================================
const newsletterForm = document.getElementById('newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('input[type="submit"]');
        const originalValue = submitBtn.value;
        submitBtn.value = 'Connecting...';
        submitBtn.disabled = true;
        
        // Send newsletter signup via EmailJS
        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, this)
            .then(function() {
                // Success
                alert('🎉 Thank you for connecting! I\'ll reach out to you soon.');
                newsletterForm.reset();
                submitBtn.value = originalValue;
                submitBtn.disabled = false;
                
            }, function(error) {
                // Error
                alert('Oops! Something went wrong. Please try the contact form below or email me directly.');
                console.error('EmailJS Error:', error);
                submitBtn.value = originalValue;
                submitBtn.disabled = false;
            });
    });
}

// ==========================================
// SMOOTH SCROLLING
// ==========================================
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

// ==========================================
// SCROLL TO TOP BUTTON
// ==========================================
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==========================================
// SKILL BARS ANIMATION
// ==========================================
const skillBars = document.querySelectorAll('.skill-progress');
let skillsAnimated = false;

const animateSkills = () => {
    const skillsSection = document.querySelector('.skills');
    if (!skillsSection) return;
    
    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (sectionPosition < screenPosition && !skillsAnimated) {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
        skillsAnimated = true;
    }
};

window.addEventListener('scroll', animateSkills);

// ==========================================
// ACTIVE NAVIGATION HIGHLIGHTING
// ==========================================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// FORM INPUT VISUAL FEEDBACK
// ==========================================
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() === '' && this.hasAttribute('required')) {
            this.style.borderColor = '#f9004d';
        } else {
            this.style.borderColor = '#333';
        }
    });
    
    input.addEventListener('focus', function() {
        this.style.borderColor = '#f9004d';
    });
});

// ==========================================
// EMAIL VALIDATION HELPER
// ==========================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ==========================================
// CONSOLE MESSAGE
// ==========================================
console.log('%c🎨 Portfolio by Annita Cheruto', 'color: #f9004d; font-size: 20px; font-weight: bold;');
console.log('%c💻 Junior Full Stack Web Developer', 'color: #fff; font-size: 14px;');
console.log('%c📧 anitacheruto5@gmail.com', 'color: #f9004d; font-size: 14px;');