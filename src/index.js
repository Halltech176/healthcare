//* Displaying drop down menu 
const whoWeAre = document.querySelector('.who-we-are');
const dropDownOne = document.querySelector('.down-menu-one');
const whatWeDo = document.querySelector('.what-we-do');
const dropDownTwo = document.querySelector('.down-menu-two');

whatWeDo.addEventListener('click', function() {
    event.preventDefault()
    removemenu()
})

// removing menu
function removemenu() {
    if (!dropDownTwo.classList.contains('show')) {
        dropDownTwo.classList.add('show')
        if (dropDownOne.classList.contains('show')) {
            dropDownOne.classList.remove('show');
        }
    } else {
        dropDownTwo.classList.remove('show')
    }
}

// menu bar mobile view 
const firstPage = document.querySelector('.first-page');
const menuBar = document.querySelector('.menubar');
const header = document.querySelector('header');
menuBar.addEventListener('click', function() {
    firstPage.classList.toggle('change');
    if (!header.classList.contains('showHeader')) {
        header.classList.add('showHeader')
    } else {
        header.classList.remove('showHeader')
    }
})

// switch to the job seeker page 
const jobSeekerBtn = document.querySelector('.job-seeker');
jobSeekerBtn.addEventListener('click', function() {
    window.location.href = 'job-seeker.html';
})


// displaying lab tech services
const LTS = document.querySelector('.lab-tech-serivces');
LTS.addEventListener('click', function() {
    window.location.href = 'lab-tech-service.html';
})


// making a smooth transition 
document.querySelectorAll('.down-menu-two a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            // Calculate the offset to consider the fixed header
            const headerOffset = document.querySelector('header').offsetHeight;

            // Scroll to the target element with an offset
            window.scrollTo({
                top: targetElement.offsetTop - headerOffset,
                behavior: 'smooth',
            });
            removemenu()
        }
    });
});

// back to the top arrow 
const backToTheTop = document.querySelector('.back-to-the-top');
backToTheTop.addEventListener('click', scrollToTop)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}