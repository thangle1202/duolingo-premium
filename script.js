document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const extraOffset = -20; // Scroll more down for pricing (and other sections)
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight - extraOffset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            navbar.style.padding = '5px 0';
            navbar.style.transition = 'all 0.3s ease';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '10px 0';
        }
    });

    // 3. FAQ Accordion Toggle
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // 4. Floating Language Flags Generation
    const flags = ['🇺🇸', '🇬🇧', '🇪🇸', '🇫🇷', '🇩🇪', '🇮🇹', '🇯🇵', '🇨🇳', '🇷🇺', '🇰🇷', '🇵🇹', '🇧🇷', '🇻🇳', '🇮🇳', '🇸🇦', '🇹🇷', '🇳🇱', '🇸🇪', '🇮🇩', '🇵🇱', '🇺🇦', '🇬🇷', '🇭🇺', '🇨🇿', '🇷🇴', '🇮🇱', '🇹🇭', '🇲🇾', '🇵🇭', '🇰🇪', '🇿🇦', '🇪🇬', '🇲🇽', '🇦🇷', '🇨🇴', '🇵🇪', '🇨🇱', '🇻🇪', '🇨🇦', '🇦🇺', '🇳🇿'];
    const flagsContainer = document.getElementById('flags-container');
    
    if (flagsContainer) {
        // Create 40 flags
        for (let i = 0; i < 40; i++) {
            const flag = document.createElement('div');
            flag.className = 'floating-flag';
            // Pick a random flag
            flag.innerText = flags[Math.floor(Math.random() * flags.length)];
            
            // Random positioning and animation duration
            flag.style.left = Math.random() * 100 + 'vw';
            flag.style.animationDuration = (Math.random() * 15 + 10) + 's'; // 10s to 25s
            flag.style.animationDelay = '-' + (Math.random() * 20) + 's'; // Start at different times
            flag.style.fontSize = (Math.random() * 20 + 20) + 'px'; // 20px to 40px
            
            flagsContainer.appendChild(flag);
        }
    }
});
