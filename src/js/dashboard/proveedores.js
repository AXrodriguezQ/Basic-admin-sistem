import { DBURL, enpointProducts } from "../constants.js";
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
  const response = await fetch(DBURL+enpointProducts);
  const data = await response.json();
  return data;
}

function createCard(item) {
  const card = document.createElement('div');
  card.className = 'card salt text-white bg-primary mb-3';
  card.style.maxWidth = '20rem';
  card.style.cursor = 'pointer';

  card.innerHTML = `
      <div class="card-body">
          <h4 class="card-title">${item.name}</h4>
          <p class="card-text">Teléfono: ${item.phone}</p>
      </div>
  `;
  
  return card;
}

async function displayCards() {
  const cardContainerSuppliers = document.getElementById('cardContainerSuppliers');
  const data = await fetchData();

  data.forEach(item => {
      const card = createCard(item);
      cardContainerSuppliers.appendChild(card);
  });
}

displayCards();
