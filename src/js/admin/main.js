import { addProducts } from "../helpers/addProduct.js";
import { logout } from "../helpers/logout.js";
import { validateSessionAdmin } from "../helpers/sessions.js";

const session = () => {
  if (!validateSessionAdmin()) {
    window.location.href = `${window.location.origin}/src/index.html`;
  }
}

(function() {
    session();
})();

const exit = document.getElementById('salir');
const btnIngresarProducto = document.getElementById('btn-ingresar-producto');

const products = [];

exit.addEventListener('click', () => logout());

btnIngresarProducto.addEventListener('click', () => {
    let name = prompt('Ingresa el nombre del producto');
    let price = prompt('Ingresa el precio del producto');
    let amount = prompt('Ingresa la cantidad del producto');

    if ( !name ) {
        alert('El nombre del producto no puede estar vacio');
        window.location.reload();
    } else if ( amount.length <= 0 ) {
        amount = 1;
    } else if ( price.length <= 0 ) {
        alert('El precio no puede estar vacio');
        window.location.reload();
    }

    const objectProduct = {
        name,
        price,
        amount: Number(amount),
    }

    products.push(objectProduct);

    console.log(products)

});

window.submitForm = async function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
  
    if (name.length < 2) {
      alert('El nombre es muy corto');
    } else if (phone.length < 5) {
        alert('El telefono es invalido')
    } else {

        const data = {
            name,
            phone,
            products,
        }

      const addProduct = await addProducts(data);
    
      if (addProduct === false) {
        alert('Ups... Ocurrió un error al agregar un producto');
      } else {
        window.location.href = '../index.html';
      }
    }
};
