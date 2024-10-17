import { DBURL, enpointBills } from "../constants.js";
import { validateSession } from "../helpers/sessions.js";

const session = () => {
  if (!validateSession()) {
    window.location.href = `${window.location.origin}/src/index.html`;
  }
}

(function() {
    session();
})();

async function fetchData() {
  const response = await fetch(DBURL+enpointBills);
  const data = await response.json();
  return data;
}

function createCard(item) {
  const card = document.createElement('div');
  card.className = 'card border-success mb-3';
  card.style.maxWidth = '20rem';
  card.style.cursor = 'pointer';

  card.innerHTML = `
        <div class="card-header">Proveedor: ${item.supplier}</div>
        <div class="card-body">
            <h4 class="card-title">${item.name}</h4>
            <p class="card-text">Comprador:${item.buyer}</p>
            <p class="card-text">Cantidad:${item.amount}</p>
            <p class="card-text">Precio:${item.price}</p>
        </div>
  `;
  
  return card;
}

async function displayCards() {
  const cardContainerBills = document.getElementById('cardContainerBills');
  const data = await fetchData();

  data.forEach(item => {
      const card = createCard(item);
      cardContainerBills.appendChild(card);
  });
}

displayCards();
