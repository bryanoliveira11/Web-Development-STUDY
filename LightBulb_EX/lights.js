let light_on = document.getElementById('light')
let background = document.getElementById('back')
let title = document.getElementById('title')
let btnOn = document.getElementById('on')
let btnOff = document.getElementById('off')

// some style to buttons, background, and title...

function on() {
    light_on.setAttribute('src', 'imgs/on.png')
    background.style.backgroundColor = '#f0ee92ab'
    background.style.transition = '2.5s'
    title.style.transition = '5s'
    title.style.color = 'orange'
    btnOn.style.borderColor = 'yellow'
    btnOff.style.borderColor = 'darkblue'
}

function off() {
    let light_off = document.getElementById('light')
    light_off.setAttribute('src', 'imgs/off.png')
    background.style.transition = '10ms'
    background.style.backgroundColor = '#242323f5'
    title.style.transition = '1s'
    title.style.color = 'whitesmoke'
    btnOn.style.borderColor = 'black'
    btnOff.style.borderColor = 'black'
}