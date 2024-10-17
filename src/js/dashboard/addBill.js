import { addBills } from "../helpers/addBills.js";
import { validateSession } from "../helpers/sessions.js";

const session = () => {
  if (!validateSession()) {
    window.location.href = `${window.location.origin}/src/index.html`;
  }
}

(function() {
    session();
})();

window.submitForm = async function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const buyer = document.getElementById('comprador').value;
  const supplier = document.getElementById('proveedor').value;
  const amount = document.getElementById('cantidad').value;
  const price = document.getElementById('precio').value;

  if (buyer.length < 2) {
    alert('La npmbre del comprador es muy corto');
  } else if (name.length < 2) {
    alert('El nombre es muy corto');
  } else if (supplier < 2) {
    alert('El nombre del proveedor es muy corto');
  } else if (amount.length <= 0) {
    amount = 1;
  } else if (price.length <= 0) {
    alert('El precio no puede estar vacio');
  } else {

    const dataBill = {
      name,
      buyer,
      supplier,
      amount,
      price,
    }

    const addBill = await addBills(dataBill);
  
    if (addBill === false) {
      alert('Ups... Ocurrió un error al registrar la factura');
    } else {
      window.location.href = '../index.html';
    }
  }
};
