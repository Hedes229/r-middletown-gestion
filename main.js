// Interactivity for Middleton Gestion Website

document.addEventListener('DOMContentLoaded', () => {
    console.log('Middleton Gestion Website Initialized');

    // --- Active Link Handling ---
    const currentPath = window.location.pathname;
    const navLinksList = document.querySelectorAll('.nav-links a');
    
    navLinksList.forEach(link => {
        const linkPath = link.getAttribute('href');
        // Handle index.html and root path
        if (currentPath.endsWith(linkPath) || (currentPath === '/' && linkPath === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // --- Mobile Menu Toggle ---
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
            const icon = mobileToggle.querySelector('.material-symbols-outlined');
            if (icon) {
                icon.textContent = navLinksContainer.classList.contains('active') ? 'close' : 'menu';
            }
        });
    }

    // --- Smooth Scroll (Still useful for section anchors if any) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
