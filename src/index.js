//* Displaying drop down menu 
const whoWeAre = document.querySelector('.who-we-are');
const dropDownOne = document.querySelector('.down-menu-one');
const whatWeDo = document.querySelector('.what-we-do');
const dropDownTwo = document.querySelector('.down-menu-two');

whoWeAre.addEventListener('click', () => {
    if (!dropDownOne.classList.contains('show')) {
        dropDownOne.classList.add('show')
        if (dropDownTwo.classList.contains('show')) {
            dropDownTwo.classList.remove('show');
        }
    } else {
        dropDownOne.classList.remove('show');
    }
})

whatWeDo.addEventListener('click', function() {
    if (!dropDownTwo.classList.contains('show')) {
        dropDownTwo.classList.add('show')
        if (dropDownOne.classList.contains('show')) {
            dropDownOne.classList.remove('show');
        }
    } else {
        dropDownTwo.classList.remove('show')
    }
})

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
