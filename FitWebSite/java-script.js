let btn_cart = document.getElementById('buy-btn')
let msg = document.querySelector('.prodadd')

//display the actual cart

let cart = document.querySelector('.cart-container')


document.querySelector('#cartbtn').onclick = () => {
    cart.classList.toggle('active')
}

window.onscroll = () => {
    cart.classList.remove('active')
}

// alerts the add message for all products btn

let productsBtn = document.querySelectorAll('.btn-cart').forEach(item => {
    item.addEventListener('click', event => {
        msg.classList.toggle('active')
        cart.classList.remove('active')
        itemCounter++
    })
})

msg.onanimationend = () => {
    msg.classList.remove('active')
}


// Cart working js

var itemCounter = 0

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

// creating the functions

function ready() {
    // remove items with fa times

    var removeCartBtn = document.getElementsByClassName('fa-times')
    for (var i = 0; i < removeCartBtn.length; i++) {
        var button = removeCartBtn[i]
        button.addEventListener('click', removeCartItems)
    }

    // quantity calculate

    var quantityInput = document.getElementsByClassName('item-qnt')
    for (var i = 0; i < quantityInput.length; i++) {
        var input = quantityInput[i]
        input.addEventListener('change', quantityChange)
    }
    // add to cart
    var addCart = document.getElementsByClassName('btn-cart')
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i]
        button.addEventListener('click', addCartClicked)
    }
}

// remove items

function removeCartItems(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
    itemCounter--
    updatePrice()
}

// add to cart 

function addCartClicked(event) {
    var button = event.target
    var shopProd = button.parentElement
    var title = shopProd.getElementsByClassName('name')[0].innerText
    var price = shopProd.getElementsByClassName('price')[0].innerText
    var productImg = shopProd.getElementsByClassName('item-image')[0].src
    btn_cart.style.display = 'flex'
    addProductCart(title, price, productImg)
    updatePrice()
}

function addProductCart(title, price, productImg) {
    var cartShopBox = document.createElement('div')
    cartShopBox.classList.add('cart-box')
    var cartItems = document.getElementsByClassName('cart-container')[0]
    var cartItemsNames = cartItems.getElementsByClassName('item-name')
    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
            alert('Item Already in Cart !')
            itemCounter--
            msg.classList.remove('active')
            return;
        }
    }

    var cartBoxContent = `
<i class="fas fa-times"></i>
<img src='${productImg}' alt='' class="item-img">
<div class="content">
    <div class="item-name"> ${title} </div>
    <div class="item-price"> ${price} </div>
    <input class="item-qnt" type="number" value="1">
</div>
`
    cartShopBox.innerHTML = cartBoxContent
    cartItems.append(cartShopBox)
    cartShopBox.getElementsByClassName('fa-times')[0].addEventListener('click', removeCartItems)
    cartShopBox.getElementsByClassName('item-qnt')[0].addEventListener('change', quantityChange)
}


// updating the total price

function updatePrice() {
    var cartContent = document.getElementsByClassName('cart-container')[0]
    var cartBoxes = cartContent.getElementsByClassName('cart-box')
    var total = 0

    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i]
        var priceElement = cartBox.getElementsByClassName('item-price')[0]
        var quantityElement = cartBox.getElementsByClassName('item-qnt')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ""))
        var quantity = quantityElement.value
        total = total + (price * quantity)
        total = Math.round(total * 100) / 100

        document.getElementsByClassName('total-price')[0].innerText = `$` + total
    }
    if (itemCounter == 0) {
        document.getElementsByClassName('total-price')[0].innerText = `YOUR CART`
        btn_cart.style.display = 'none'
    }

    // buy button
    btn_cart.onclick = () => {
        if (total == 0 || itemCounter == 0) {
            alert('cart empty !')
        } else {
            var buy = confirm(`Total Value = $ ${total}.`)
            if (buy) {
                let msg_change = document.getElementById('msg_display')
                msg.classList.toggle('active')
                msg_change.textContent = `ITEMS BUYED !`
                msg.onanimationend = () => {
                    msg.classList.remove('active')
                    location.reload()
                }
            }
        }
    }
}
// quantity change 

function quantityChange(event) {
    var input = event.target
    if (isNaN(input.value) || input.value < 0) {
        input.value = 1
    }
    updatePrice()
}


// bmi measurement window 

let bmiTest = document.querySelector('.measurement')

// open the bmi test section

document.querySelector('#bmiBtn').onclick = () => {
    bmiTest.classList.toggle('active')
}

// calculator

document.querySelector("#bmiCalc").onclick = () => {
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let results = document.getElementById('result')

    if (height === "" || isNaN(height))
        alert("Provide a valid Height!")
    else if (weight === "" || isNaN(weight)) {
        alert("Provide a valid Weight!")
    } else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.6) {
            results.textContent = `${bmi} : Under Weight`
            results.style.color = '#ffe600'
        } else if (bmi >= 18.6 && bmi < 24.9) {
            results.textContent = `${bmi} : Normal`
            results.style.color = '#03be03'
        } else {
            results.textContent = `${bmi} : Over Weight`
            results.style.color = '#d10606'
        }
    }
}

// closes the bmi test section

document.querySelector('#bmiClose').onclick = () => {
    bmiTest.classList.remove('active')
    height.value = ''
    weight.value = ''
}