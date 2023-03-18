
// Typed.js settings
const typed = new Typed('.typed', {
    strings: ['Back-end developer', 'Mobile developer', 'Django developer', 'Python developer'],
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

/* 
Function to add a class in an element when a different element is mouseover, and to remove
the class when is mouseout 
*/
function mouseOverAndOut(elementListener, elementModify, className){
    elementListener.addEventListener('mouseover', function(){
        elementModify.classList.add(className);
    });

    elementListener.addEventListener('mouseout', function(){
        elementModify.classList.remove(className);
    });
}


// When we put the mouse over a social media icon, the icon color changes
const githubIcon = document.getElementById('github-icon');
const githubBack = document.getElementById('github');
mouseOverAndOut(githubBack, githubIcon, 'main-color');

const linkedinIcon = document.getElementById('linkedin-icon');
const linkedinBack = document.getElementById('linkedin');
mouseOverAndOut(linkedinBack, linkedinIcon, 'main-color');

const youtubeIcon = document.getElementById('youtube-icon');
const youtubeBack = document.getElementById('youtube');
mouseOverAndOut(youtubeBack, youtubeIcon, 'main-color');

const tiktokIcon = document.getElementById('tiktok-icon');
const tiktokBack = document.getElementById('tiktok');
mouseOverAndOut(tiktokBack, tiktokIcon, 'main-color');


// When we put the mouse over the hero image, the frame changes
const imageAbout = document.getElementById('image-about');
const imageHeroContainer = document.getElementById('image-about-container');
mouseOverAndOut(imageAbout, imageHeroContainer, 'image-about-container-hover');


// When we put the mouse over the portfolio-box, the details go up
const cmAccesoriosDetail = document.getElementById('cmaccesorios-detail');
const cmAccesoriosBox = document.getElementById('cmaccesorios-image');
mouseOverAndOut(cmAccesoriosBox, cmAccesoriosDetail, 'portfolio-details-hover');
mouseOverAndOut(cmAccesoriosDetail, cmAccesoriosDetail, 'portfolio-details-hover');

const leagueDetail = document.getElementById('league-detail');
const leagueBox = document.getElementById('league-image');
mouseOverAndOut(leagueBox, leagueDetail, 'portfolio-details-hover');
mouseOverAndOut(leagueDetail, leagueDetail, 'portfolio-details-hover');

const cocinaSaludDetail = document.getElementById('cocinasalud-detail');
const cocinaSaludBox = document.getElementById('cocinasalud-image');
mouseOverAndOut(cocinaSaludBox, cocinaSaludDetail, 'portfolio-details-hover');
mouseOverAndOut(cocinaSaludDetail, cocinaSaludDetail, 'portfolio-details-hover');

const votarFmsDetail = document.getElementById('fms-detail');
const votarFmsBox = document.getElementById('fms-image');
mouseOverAndOut(votarFmsBox, votarFmsDetail, 'portfolio-details-hover');
mouseOverAndOut(votarFmsDetail, votarFmsDetail, 'portfolio-details-hover');

const beSpokeDetail = document.getElementById('bespoke-detail');
const beSpokeBox = document.getElementById('bespoke-image');
mouseOverAndOut(beSpokeBox, beSpokeDetail, 'portfolio-details-hover');
mouseOverAndOut(beSpokeDetail, beSpokeDetail, 'portfolio-details-hover');


/* Button to go top */

document.getElementById('top-button').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});