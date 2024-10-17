import { DBURL, enpointProducts } from "../constants.js";
import { validateSessionAdmin } from "../helpers/sessions.js";

const session = () => {
  if (!validateSessionAdmin()) {
    window.location.href = `${window.location.origin}/src/index.html`;
  }
}

(function() {
  session();
})();

const currentUrl = window.location.href;
const url = new URL(currentUrl);
const params = new URLSearchParams(url.search);
const productId = params.get('id');

async function getProducts(id) {
  try {
    const res = await axios.get(`http://localhost:3000/products/${id}`);

    const cardContainer = document.getElementById('cardContainerProducts');
    cardContainer.innerHTML = ''; 

    for (let i = 0; i < res.data.products.length; i++) {
      const product = res.data.products[i];
          const card = `
          <div class="card border-primary mb-3" style="max-width: 20rem;">
            <div class="card-header">${product.name}</div>
            <div class="card-body">
              <h4 class="card-title">Precio: $${product.price}</h4>
              <p class="card-text">Cantidad: ${product.amount}</p>
            </div>
          </div>
        `;

        cardContainer.innerHTML += card;
      }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}


getProducts(productId)
