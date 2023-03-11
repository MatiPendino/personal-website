
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

// When we put the mouse over a social media icon, the icon color changes

const githubIcon = document.getElementById('github-icon');
const githubBack = document.getElementById('github');

githubBack.addEventListener('mouseover', function() {
    githubIcon.classList.add('main-color');
})

githubBack.addEventListener('mouseout', function() {
    githubIcon.classList.remove('main-color');
})

const linkedinIcon = document.getElementById('linkedin-icon');
const linkedinBack = document.getElementById('linkedin');

linkedinBack.addEventListener('mouseover', function() {
    linkedinIcon.classList.add('main-color');
})

linkedinBack.addEventListener('mouseout', function() {
    linkedinIcon.classList.remove('main-color');
})

const youtubeIcon = document.getElementById('youtube-icon');
const youtubeBack = document.getElementById('youtube');

youtubeBack.addEventListener('mouseover', function() {
    youtubeIcon.classList.add('main-color');
})

youtubeBack.addEventListener('mouseout', function() {
    youtubeIcon.classList.remove('main-color');
})

const tiktokIcon = document.getElementById('tiktok-icon');
const tiktokBack = document.getElementById('tiktok');

tiktokBack.addEventListener('mouseover', function() {
    tiktokIcon.classList.add('main-color');
})

tiktokBack.addEventListener('mouseout', function() {
    tiktokIcon.classList.remove('main-color');
})

// When we put the mouse over the hero image, the frame changes
const imageAbout = document.getElementById('image-about');
const imageHeroContainer = document.getElementById('image-about-container');

imageAbout.addEventListener('mouseover', function() {
    imageHeroContainer.classList.add('image-about-container-hover');
});

imageAbout.addEventListener('mouseout', function() {
    imageHeroContainer.classList.remove('image-about-container-hover');
});


const muchticketTab = document.getElementById('muchticket-tab');
muchticketTab.addEventListener('mouseup', function (){
    muchticketTab.classList.add('porfolio-tab-click');
})


// When we put the mouse over the portfolio-box, the details go up
/*const cmAccesoriosDetail = document.getElementById('cmaccesorios-detail');
const cmAccesoriosBox = document.getElementById('cmaccesorios-image');

cmAccesoriosBox.addEventListener('mouseover', function() {
    cmAccesoriosDetail.classList.add('portfolio-details-hover');
});

cmAccesoriosBox.addEventListener('mouseout', function() {
    cmAccesoriosDetail.classList.remove('portfolio-details-hover');
}); 

cmAccesoriosDetail.addEventListener('mouseover', function() {
    cmAccesoriosDetail.classList.add('portfolio-details-hover');
});

cmAccesoriosDetail.addEventListener('mouseout', function() {
    cmAccesoriosDetail.classList.remove('portfolio-details-hover');
}); */

const leagueDetail = document.getElementById('league-detail');
const leagueBox = document.getElementById('league-image');

leagueBox.addEventListener('mouseover', function() {
    leagueDetail.classList.add('portfolio-details-hover');
});

leagueBox.addEventListener('mouseout', function() {
    leagueDetail.classList.remove('portfolio-details-hover');
}); 

leagueDetail.addEventListener('mouseover', function() {
    leagueDetail.classList.add('portfolio-details-hover');
});

leagueDetail.addEventListener('mouseout', function() {
    leagueDetail.classList.remove('portfolio-details-hover');
}); 

const cocinaSaludDetail = document.getElementById('cocinasalud-detail');
const cocinaSaludBox = document.getElementById('cocinasalud-image');

cocinaSaludBox.addEventListener('mouseover', function() {
    cocinaSaludDetail.classList.add('portfolio-details-hover');
});

cocinaSaludBox.addEventListener('mouseout', function() {
    cocinaSaludDetail.classList.remove('portfolio-details-hover');
}); 

cocinaSaludDetail.addEventListener('mouseover', function() {
    cocinaSaludDetail.classList.add('portfolio-details-hover');
});

cocinaSaludDetail.addEventListener('mouseout', function() {
    cocinaSaludDetail.classList.remove('portfolio-details-hover');
}); 

/*const votarFmsDetail = document.getElementById('fms-detail');
const votarFmsBox = document.getElementById('fms-image');

votarFmsBox.addEventListener('mouseover', function() {
    votarFmsDetail.classList.add('portfolio-details-hover');
});

votarFmsBox.addEventListener('mouseout', function() {
    votarFmsDetail.classList.remove('portfolio-details-hover');
}); 

votarFmsDetail.addEventListener('mouseover', function() {
    votarFmsDetail.classList.add('portfolio-details-hover');
});

votarFmsDetail.addEventListener('mouseout', function() {
    votarFmsDetail.classList.remove('portfolio-details-hover');
}); */


const beSpokeDetail = document.getElementById('bespoke-detail');
const beSpokeBox = document.getElementById('bespoke-image');

beSpokeBox.addEventListener('mouseover', function() {
    beSpokeDetail.classList.add('portfolio-details-hover');
});

beSpokeBox.addEventListener('mouseout', function() {
    beSpokeDetail.classList.remove('portfolio-details-hover');
}); 

beSpokeDetail.addEventListener('mouseover', function() {
    beSpokeDetail.classList.add('portfolio-details-hover');
});

beSpokeDetail.addEventListener('mouseout', function() {
    beSpokeDetail.classList.remove('portfolio-details-hover');
}); 



/* Button to go top */

document.getElementById('top-button').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});