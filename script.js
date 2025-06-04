document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjust for sticky header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact Me button functionality
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        const contactButton = document.createElement('button');
        contactButton.textContent = 'Send Email';
        contactButton.id = 'contactButton';
        contactSection.appendChild(contactButton);

        contactButton.addEventListener('click', function() {
            const email = 'your.email@example.com'; // Replace with your actual email
            const subject = 'Portfolio Contact';
            const body = 'Hello, I would like to get in touch with you.';
            window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    }

    // Style for the contact button (optional, can also be in CSS)
    const contactButtonStyle = document.getElementById('contactButton');
    if (contactButtonStyle) {
        contactButtonStyle.style.padding = '10px 20px';
        contactButtonStyle.style.backgroundColor = '#5cb85c';
        contactButtonStyle.style.color = 'white';
        contactButtonStyle.style.border = 'none';
        contactButtonStyle.style.borderRadius = '5px';
        contactButtonStyle.style.fontSize = '1.1rem';
        contactButtonStyle.style.cursor = 'pointer';
        contactButtonStyle.style.display = 'block';
        contactButtonStyle.style.margin = '20px auto 0'; // Added top margin
        contactButtonStyle.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#4cae4c';
        });
        contactButtonStyle.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#5cb85c';
        });
    }
});
