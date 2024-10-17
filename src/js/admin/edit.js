import { validateSessionAdmin } from "../helpers/sessions.js";

const session = () => {
  if (!validateSessionAdmin()) {
    window.location.href = `${window.location.origin}/src/index.html`;
  }
}

async function editProduct(id, data) {
  try {
    await axios.patch(`http://localhost:3000/products/${id}`, data);
  } catch (error) {
    console.error('Error update product:', error);
  }
}

(async function() {
  session();
})();

window.submitForm = async function(e) {
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  const params = new URLSearchParams(url.search);
  const productId = params.get('id');

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;

  if (name.length < 2) {
    alert('La npmbre del comprador es muy corto');
  } else if (phone.length < 2) {
    alert('El nombre es muy corto');
  } else {

    const data = {
      name,
      phone,
    }

    if (productId) {
      await editProduct(productId, data);
      window.location.href = 'index.html';
    } else {
      console.error('No product ID found in the URL.');
    }
  }
}
