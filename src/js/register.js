import { existUser } from "./helpers/findUsers.js";
import { register } from "./helpers/register.js";

window.submitForm = async function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const password2 = document.getElementById('password2').value;

  if (password.length < 5) {
    alert('La contraseña es muy corta');
  } else if (name.length < 2) {
    alert('El nombre es muy corto');
  } else if (password !== password2) {
    alert('Las contraseñas no coinciden');
  } else if (await existUser(email)) {
    alert('Al parecer este email ya está en uso');
  } else {
    const registerFunction = await register(name, email, password);
  
    if (registerFunction === false) {
      alert('Ups... Ocurrió un error al registrar el usuario');
    } else {
      localStorage.setItem('sessionValid', true);
      localStorage.setItem('emailSession', email);
      window.location.href = 'dashboard/index.html';
    }
  }
};
