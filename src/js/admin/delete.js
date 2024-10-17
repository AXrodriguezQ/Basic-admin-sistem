import { validateSessionAdmin } from "../helpers/sessions.js";

const session = () => {
  if (!validateSessionAdmin()) {
    window.location.href = `${window.location.origin}/src/index.html`;
  }
}

async function deleteProduct(id) {
  try {
    await axios.delete(`http://localhost:3000/products/${id}`);
  } catch (error) {
    console.error('Error deleting product:', error);
  }
}

(async function() {
  session();
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  const params = new URLSearchParams(url.search);
  const productId = params.get('id');

  if (productId) {
    await deleteProduct(productId);
  } else {
    console.error('No product ID found in the URL.');
    e.preventDefault();
  }

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

  window.location.href = 'index.html';
})();
