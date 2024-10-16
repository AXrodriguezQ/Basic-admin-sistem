import { login } from "./helpers/login.js";

window.submitForm = async function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const loginFunction = await login(email, password)

    if (loginFunction === false) {
        alert('Ups... Usuario o contraseña invalida');
    } else {
        localStorage.setItem('sessionValid', true);
        localStorage.setItem('emailSession', email);
        window.location.href = 'dashboard/index.html';
    }
    
};
