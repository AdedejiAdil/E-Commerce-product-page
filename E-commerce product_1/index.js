
const bigImage = document.querySelector('.big-image');
const thumbImage = document.querySelectorAll('.thumb-img')
const bigPop = document.querySelector('.big-pop-image')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const modalPop = document.querySelector('.modal-popup')
const prevPop = document.querySelector('.prev-pop')
const nextPop = document.querySelector('.next-pop')
const closePop = document.querySelector('.close-pop')
const firstImage = document.querySelector('.small-image-1')
const secondImage = document.querySelector('.small-image-2')
const thirdImage = document.querySelector('.small-image-3')
const fourthImage = document.querySelector('.small-image-4')
const firstPop = document.querySelector('.pop-image-1')
const secondPop = document.querySelector('.pop-image-2')
const thirdPop = document.querySelector('.pop-image-3')
const fourthPop = document.querySelector('.pop-image-4')


//IMAGE SLIDER FOR MOBILE VIEW START
const bigImages =  [
    "image-product-1.jpg", "image-product-2.jpg", 
    "image-product-3.jpg", "image-product-4.jpg"   
];
let i = 0;

next.addEventListener('click', () => {
    i++;
    if(i >= bigImages.length - 1 ) {
        i = 0
    }
   bigImage.style.backgroundImage = `url(images/${bigImages[i]})`
})

prev.addEventListener('click', () => {
    i--;
    if( i < 0) {
        i = bigImages.length - 1;
    } 
    bigImage.style.backgroundImage = `url(images/${bigImages[i]})`
})
//IMAGE SLIDER FOR MOBILE VIEW END

// CHANGE IMAGE ON CLICK ON THUMBNAILS START
firstImage.addEventListener('click', () => {
    if (bigImage.style.backgroundImage = `url(images/${bigImages[i]})`) {
        bigImage.style.backgroundImage = `url(images/${bigImages[0]})`;
        modalPop.style.display = 'block';
    }
})
secondImage.addEventListener('click', () => {
    if (bigImage.style.backgroundImage = `url(images/${bigImages[i]})`) {
        bigImage.style.backgroundImage = `url(images/${bigImages[1]})`;
        modalPop.style.display = 'block';
    }
})
thirdImage.addEventListener('click', () => {
    if (bigImage.style.backgroundImage = `url(images/${bigImages[i]})`) {
        bigImage.style.backgroundImage = `url(images/${bigImages[2]})`;
        modalPop.style.display = 'block';
    }
})
fourthImage.addEventListener('click', () => {
    if (bigImage.style.backgroundImage = `url(images/${bigImages[i]})`) {
        bigImage.style.backgroundImage = `url(images/${bigImages[3]})`;
        modalPop.style.display = 'block';
    }
})
// CHANGE IMAGE ON CLICK ON THUMBNAILS END




// <=============OPEN-MODAL-POPUP======================>
// CHANGE POP-IMAGE ON CLICK ON THUMBNAILS START
firstPop.addEventListener('click', () => {
    if (bigPop.style.backgroundImage = `url(images/${bigImages[i]})`) {
        bigPop.style.backgroundImage = `url(images/${bigImages[0]})`;
    }
})
secondPop.addEventListener('click', () => {
    if (bigPop.style.backgroundImage = `url(images/${bigImages[i]})`) {
        bigPop.style.backgroundImage = `url(images/${bigImages[1]})`;
    }
})
thirdPop.addEventListener('click', () => {
    if (bigPop.style.backgroundImage = `url(images/${bigImages[i]})`) {
        bigPop.style.backgroundImage = `url(images/${bigImages[2]})`;
    }
})
fourthPop.addEventListener('click', () => {
    if (bigPop.style.backgroundImage = `url(images/${bigImages[i]})`) {
        bigPop.style.backgroundImage = `url(images/${bigImages[3]})`;
    }
})

// <=====================CLOSE-MODAL-POPUP=========================>
closePop.addEventListener('click', () => {
    if(modalPop.style.display === 'block'){
        modalPop.style.display = 'none'
    }
})


// CHANGE POP-IMAGE ON CLICK ON THUMBNAILS END

nextPop.addEventListener('click', () => {
    i++;
    if(i >= bigImages.length - 1 ) {
        i = 0
    }
   bigPop.style.backgroundImage = `url(images/${bigImages[i]})`
})

prevPop.addEventListener('click', () => {
    i--;
    if( i < 0) {
        i = bigImages.length - 1;
    } 
    bigPop.style.backgroundImage = `url(images/${bigImages[i]})`
})
// <=============MODAL POPUP======================>