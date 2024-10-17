import { adminName, adminPassword } from "./constants.js";
import { login } from "./helpers/login.js";

const session = () => {
  if (localStorage.getItem('sessionValid') === 'true') {
    window.location.href = 'dashboard/index.html';
  }
  if (localStorage.getItem('sessionValid') === 'admin') {
    window.location.href = 'admin/index.html';
  }
}

(function() {
    session();
})();


window.submitForm = async function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if ( email === adminName && password === adminPassword) {
    localStorage.setItem('sessionValid', 'admin');
    localStorage.setItem('emailSession', 'admin@admin.com');
    window.location.href = 'admin/index.html';
  }

  const loginFunction = await login(email, password)

  if (loginFunction === false) {
    alert('Ups... Usuario o contraseña invalida');
  } else {
    localStorage.setItem('sessionValid', true);
    localStorage.setItem('emailSession', email);
    window.location.href = 'dashboard/index.html';
  }
    
};
