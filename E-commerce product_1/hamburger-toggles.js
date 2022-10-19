const hamburgerMenu = document.querySelector('.hamburger-menu'); 
const hamburgerToggle = document.querySelector('.hamburger-toggle');
const hamburgerClose = document.querySelector('.hamburger-close');



//TOGGLE BETWEEN HAMBURGER (MENU AND CLOSE) START
hamburgerMenu.addEventListener('click', () => {
    if(hamburgerToggle.style.display === 'block') {
        hamburgerToggle.style.display = 'none';
    }
    else {
        hamburgerToggle.style.display = 'block'
    }
})
hamburgerClose.addEventListener('click', () => {
    if(hamburgerToggle.style.display === 'block') {
        hamburgerToggle.style.display = 'none'
    }
    else {
        hamburgerToggle.style.display = 'block'
    }
})
//TOGGLE BETWEEN HAMBURGER (MENU AND CLOSE) END

