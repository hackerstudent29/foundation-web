document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const navTriggers = document.querySelectorAll('.nav-trigger');
    const dropdownOverlay = document.getElementById('dropdown-overlay');
    const dropdownPanes = document.querySelectorAll('.dropdown-pane');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    let activeTrigger = null;
    let isMobile = window.innerWidth <= 768;

    // Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isLight = document.body.classList.toggle('light-theme');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
    }

    // Track window resize to reset states if layout switches between desktop & mobile
    window.addEventListener('resize', () => {
        const checkMobile = window.innerWidth <= 768;
        if (checkMobile !== isMobile) {
            isMobile = checkMobile;
            resetDesktopDropdown();
            resetMobileMenu();
        }
    });

    /* ==========================================================================
       Desktop Navigation (Apple-style Full Width Dropdown)
       ========================================================================== */
    
    // We attach hover and click listeners to handle high-end desktop interaction
    navTriggers.forEach(trigger => {
        // Desktop Hover triggers
        trigger.addEventListener('mouseenter', (e) => {
            if (isMobile) return;
            openDropdown(trigger);
        });

        // Desktop Click fallback
        trigger.addEventListener('click', (e) => {
            if (isMobile) {
                // Mobile behavior is handled separately by accordion toggle
                toggleMobileAccordion(trigger);
                return;
            }
            if (activeTrigger === trigger) {
                closeDropdown();
            } else {
                openDropdown(trigger);
            }
        });
    });

    // Close desktop dropdown if mouse leaves the header
    header.addEventListener('mouseleave', () => {
        if (isMobile) return;
        closeDropdown();
    });

    function openDropdown(trigger) {
        const paneId = trigger.getAttribute('data-dropdown');
        const targetPane = document.getElementById(`dropdown-${paneId}`);
        
        if (!targetPane) return;

        // Mark trigger as active
        navTriggers.forEach(t => t.classList.remove('active'));
        trigger.classList.add('active');
        activeTrigger = trigger;

        // Hide other panes, show target pane
        dropdownPanes.forEach(pane => {
            pane.classList.remove('active');
        });
        targetPane.classList.add('active');

        // Dynamically compute the container's height for a smooth transition
        const paneHeight = targetPane.scrollHeight + 80; // height + padding
        dropdownOverlay.style.height = `${paneHeight}px`;
        dropdownOverlay.classList.add('active');
        header.classList.add('menu-open');
    }

    function closeDropdown() {
        navTriggers.forEach(t => t.classList.remove('active'));
        dropdownOverlay.style.height = '0px';
        dropdownOverlay.classList.remove('active');
        header.classList.remove('menu-open');
        activeTrigger = null;

        // Delay removing active class on pane until animation completes
        setTimeout(() => {
            if (!activeTrigger) {
                dropdownPanes.forEach(pane => pane.classList.remove('active'));
            }
        }, 300);
    }

    function resetDesktopDropdown() {
        dropdownOverlay.style.height = '';
        dropdownOverlay.classList.remove('active');
        header.classList.remove('menu-open');
        navTriggers.forEach(t => t.classList.remove('active'));
        dropdownPanes.forEach(pane => pane.classList.remove('active'));
        activeTrigger = null;
    }

    /* ==========================================================================
       Mobile Navigation (Drawer & Accordion List)
       ========================================================================== */
    
    // Prepare Mobile Menu Elements: Clone desktop dropdown links into mobile view dynamically
    navTriggers.forEach(trigger => {
        const paneId = trigger.getAttribute('data-dropdown');
        const desktopPane = document.getElementById(`dropdown-${paneId}`);
        
        if (desktopPane) {
            // Create a wrapper for mobile inline list
            const mobileWrapper = document.createElement('div');
            mobileWrapper.className = 'dropdown-pane-mobile-inline';
            mobileWrapper.id = `mobile-dropdown-${paneId}`;
            
            // Build simple links structure from the desk pane columns
            const linksList = document.createElement('ul');
            const links = desktopPane.querySelectorAll('.dropdown-col ul li a');
            
            links.forEach(link => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = link.getAttribute('href');
                a.textContent = link.textContent;
                // Close menu when clicking any link
                a.addEventListener('click', () => {
                    resetMobileMenu();
                });
                li.appendChild(a);
                linksList.appendChild(li);
            });

            // Append a bold CTA at bottom of accordion if exists
            const ctaLink = desktopPane.querySelector('.arrow-link');
            if (ctaLink) {
                const li = document.createElement('li');
                li.style.marginTop = '20px';
                const a = document.createElement('a');
                a.href = ctaLink.getAttribute('href');
                a.textContent = ctaLink.textContent;
                a.style.color = 'var(--primary-blue)';
                a.style.fontWeight = '600';
                a.addEventListener('click', () => {
                    resetMobileMenu();
                });
                li.appendChild(a);
                linksList.appendChild(li);
            }

            mobileWrapper.appendChild(linksList);
            // Insert mobileWrapper inside the parent nav-item element (just below trigger button)
            trigger.parentNode.appendChild(mobileWrapper);
        }
    });

    // Mobile hamburger toggle handler
    mobileMenuToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.contains('active');
        if (isOpen) {
            resetMobileMenu();
        } else {
            navMenu.classList.add('active');
            mobileMenuToggle.classList.add('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'true');
            header.classList.add('menu-open');
        }
    });

    function toggleMobileAccordion(trigger) {
        const paneId = trigger.getAttribute('data-dropdown');
        const mobilePane = document.getElementById(`mobile-dropdown-${paneId}`);
        const isActive = trigger.classList.contains('active-sub');

        // Close all other accordions first
        document.querySelectorAll('.nav-trigger').forEach(t => {
            t.classList.remove('active-sub');
        });
        document.querySelectorAll('.dropdown-pane-mobile-inline').forEach(p => {
            p.classList.remove('active');
        });

        // Toggle target
        if (!isActive) {
            trigger.classList.add('active-sub');
            if (mobilePane) {
                mobilePane.classList.add('active');
            }
        }
    }

    function resetMobileMenu() {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        header.classList.remove('menu-open');
        
        document.querySelectorAll('.nav-trigger').forEach(t => {
            t.classList.remove('active-sub');
        });
        document.querySelectorAll('.dropdown-pane-mobile-inline').forEach(p => {
            p.classList.remove('active');
        });
    }

    // Global CTA links click event: close mobile menu
    document.querySelectorAll('.hero-link-item, .dept-link, .btn-primary-blue-cta, .footer-grid a').forEach(link => {
        link.addEventListener('click', () => {
            if (isMobile) {
                resetMobileMenu();
            }
        });
    });

    // Hardware-Accelerated Scroll Reveal Observer
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                    observer.unobserve(entry.target); // Trigger only once
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        scrollRevealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback for older browsers
        scrollRevealElements.forEach(el => el.classList.add('reveal-active'));
    }
});
