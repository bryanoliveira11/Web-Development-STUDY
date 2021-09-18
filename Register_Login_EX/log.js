let username = document.getElementById('user')
let password = document.getElementById('pass')
let users_L = []
let passwords_L = []
let text = document.getElementById('error_text')


// clear inputs

function reset() {
    username.value = []
    password.value = []
    username.focus()
    text.innerHTML = ''
}

// login succeeded page location

function change_page() {
    let page = confirm('Wanna Continue ?')
    reset()
    if (page == true) {
        document.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }
}

// register validations

function user_create() {
    if (username.value.length == 0 || password.value.length == 0) {
        text.innerHTML = ('TIPS : Please, Input a Username / Password !')
    } else if (username.value.length < 3 || password.value.length < 8) {
        text.innerHTML = ('TIPS : Use a 8 DIGIT PASSWORD and a 3 DIGIT USERNAME')
    }
    else {
        alert('Register Succeed ! ')
        alert(`Hello ${username.value} , Please Login to Navigate !`)
        users_L = (username.value)
        passwords_L = (password.value)
        reset()
    }
}


// login validations 

function do_login() {
    if (username.value.length == 0 || password.value.length == 0) {
        text.innerHTML = (`TIPS : Please, Input a Username and a Password !`)
    } else if (username.value.length < 3 || password.value.length < 8) {
        text.innerHTML = ('TIPS : Use a 8 DIGIT PASSWORD and a 3 DIGIT USERNAME')
    } else if (password.value == passwords_L && username.value == users_L) {
        alert('Login Succeeded !')
        change_page()
    } else {
        text.innerHTML = ('Error, Please Check Your Login and Your User !')
    }
}


// show users and password

function users() {
    alert(`USER : ${users_L}`)
    let show_pass = confirm('Show Password ?')
    reset()
    if (show_pass == true) {
        alert(`Password : ${passwords_L}`)
    }
}


function register() {
    user_create()
}

function login() {
    do_login()
}