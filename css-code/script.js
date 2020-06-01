function openRegister() {
    var loginForm = document.getElementById('login-form')
    var registerForm = document.getElementById('register-form')
    loginForm.classList.add('hide')
    registerForm.classList.remove('hide')
}

function openLogin() {
    var registerForm = document.getElementById('register-form')
    var loginForm = document.getElementById('login-form')
    registerForm.classList.add('hide')
    loginForm.classList.remove('hide')
}