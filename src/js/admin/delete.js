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

  window.location.href = 'stock.html';
})();
