
const shopCart = document.querySelector(".shop-cart")
const checkButton = document.querySelector(".checkout-btn")



// SHOP TOGGLE
shopCart.addEventListener('click', () => {
    if(cartView.style.display === 'block') {
        cartView.style.display = 'none'
    }
    else {
        cartView.style.display = 'block'
    }
})


// CHECKOUT BOX
checkButton.addEventListener('click', () => {
    if(cartView.style.display === 'block') {
        cartView.style.display = 'none'
    }
    else {
        cartView.style.display = 'block'
    }
})

// REMOVE ITEM
// 




// COUNTER



// CHANGE IMAGE WHEN THUMBNAILS IS BEING CLICKED===START

// CHANGE IMAGE WHEN THUMBNAILS IS BEING CLICKED===END

























// plus.addEventListener('click', () => {
//     counter++;
//     if (counter > 0) {
//         value.innerHTML = counter;
//         itemCounter.innerHTML = counter
//     }
// })

// minus.addEventListener('click', () => {
//     counter--;
//     if (counter >= 0) {
//         value.innerHTML = counter;
//         cartValue.innerHTML = counter;
//         emptyCart.style.display = 'block'
//         filledCart.style.display = 'none'
//     } else if (counter = 0) {
//         value.innerHTML = counter
//         cartValue.innerHTML = counter
//         cartValue.style.display 
//     } 
// });

// addToCartButton.addEventListener('click', () => {

//     if (counter > 0) {
//         filledCart.style.display = 'block'
//         emptyCart.style.display = 'none'
//         cartValue.style.display = 'block'
//         cartValue.innerHTML = counter
//     }

// })