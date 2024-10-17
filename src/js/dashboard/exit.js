import { logout } from "../helpers/logout.js";

const exit = document.getElementById('salir');

exit.addEventListener('click', () => logout());
