
// Typed.js settings
const typed = new Typed('.typed', {
    strings: ['Back-end developer', 'Mobile developer', 'Django developer', 'Python developer', 'WordPress developer'],
    typeSpeed: 80,
    backSpeed: 30,
    backDelay: 500,
    startDelay: 1000,
    loop: true
});

// Get current year
const yearElement = document.getElementById('current-year');
const currentDate = new Date();
yearElement.innerHTML = currentDate.getFullYear();

// Class active
const sectionAll = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    sectionAll.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelector('nav a[href*=' + sectionId + ']').classList.add('active');
        }
        else {
            document.querySelector('nav a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
});


/* Button to go top */

document.getElementById('top-button').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});