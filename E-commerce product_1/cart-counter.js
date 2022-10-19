// COUNTER (MINUS / ADD)
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const counterValue = document.querySelector(".value");
const cartValue = document.querySelector(".cart-value");
const itemCounter = document.querySelector(".item-counter");
const cartItem = document.querySelector(".cart-item");
const addToCartButton = document.querySelector(".button");
const removeItem = document.querySelector(".remove-item")
const emptyCart = document.querySelector(".empty-cart")
const filledCart = document.querySelector(".filled-cart")
const cartView = document.querySelector(".cart-view")

let counter = 0;

plus.addEventListener('click', function plus() {
    counter++;
    if (counter > 0) {
        itemCounter.innerText = counter;
        counterValue.innerText = counter;
        cartValue.innerText = counter;
        cartValue.style.display = 'block'

    }
    
})

minus.addEventListener('click', () => {
    counter--;
    if (counter >= 0) {
        itemCounter.innerHTML = counter;
        counterValue.innerHTML = counter;
        cartValue.innerHTML = counter;
        cartValue.innerHTML = counter;
        
    }
    else if (counter = 0) {
        itemCounter.innerHTML = counter;
       cartValue.classList.add('hidden')
       cartValue.classList.remove('cart-value')
    }
    console.log(cartValue)
})


// ADD TO CARR START    
addToCartButton.addEventListener('click', () => {
    let i = 0;
    counter++
    if( i < counter) {
        filledCart.classList.add('visible')
        filledCart.classList.remove('filled-cart')
        emptyCart.classList.add('hidden')
    }
        counter = 0;
        counterValue.innerHTML = counter
})
// ADD TO CART END


// REMOVE ITEM START
removeItem.addEventListener('click', () => {
    let i = 0;
    counter++;
    if (i < counter) {
        filledCart.classList.add('filled-cart');
        filledCart.classList.remove('hidden');
        emptyCart.classList.remove('hidden');
        cartValue.style.display = 'none'
    }
    counter = 0;
    counterValue.innerHTML = counter;
})
// REMOVE ITEM END
