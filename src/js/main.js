/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
    }

    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        });

        target.classList.add('qualification__active');

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active');
        })
        tab.classList.add('qualification__active');
    })
})

/*==================== SERVICES MODAL ====================*/
document.addEventListener('DOMContentLoaded', () => {
    const servicesContainer = document.getElementById('services-container');

    // Function to close all modals
    const closeAllModals = () => {
        const activeModals = document.querySelectorAll('.services__modal.active-modal');
        activeModals.forEach(modal => {
            modal.classList.remove('active-modal');
        });
    };

    // Event delegation for "View More" buttons
    servicesContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('services__button') ||
            event.target.closest('.services__button')) {
            const modal = event.target.closest('.services__content').querySelector('.services__modal');
            if (modal) {
                event.stopPropagation(); // Prevent event from bubbling to document
                modal.classList.add('active-modal');
            }
        }
    });

    // Event delegation for modal close icons
    servicesContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('services__modal-close')) {
            const modal = event.target.closest('.services__modal');
            if (modal) {
                modal.classList.remove('active-modal');
            }
        }
    });

    // Close modals when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.services__modal-content') && 
            !event.target.closest('.services__button')) {
            closeAllModals();
        }
    });

    // Prevent modal content clicks from closing the modal
    const modalContents = document.querySelectorAll('.services__modal-content');
    modalContents.forEach(content => {
        content.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    });
});

/*==================== PORTFOLIO SWIPER  ====================*/
document.addEventListener('DOMContentLoaded', () => {
    const portfolioSwiper = new Swiper('.portfolio__container', {
        cssMode: true,
        loop: false,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: false,
            // Force exactly 3 bullets
            renderBullet: function (index, className) {
                if (index < 3) { // Only show 3 bullets
                    return '<span class="' + className + '"></span>';
                }
                return '';
            },
        },
        keyboard: true,
    });
});

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header');
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);


/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Get current theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// Set initial theme based on previous selection
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'remove' : 'add'](iconTheme)
}

// Activate/deactivate theme manually with the button
themeButton.addEventListener('click', () => {
    // Toggle the dark theme class on the body
    document.body.classList.toggle(darkTheme)
    
    // Toggle the icon class
    themeButton.classList.toggle(iconTheme)
    
    // Save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})