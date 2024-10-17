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
    try {
        const response = await fetch(DBURL + enpointProducts);
        if (!response.ok) {
            throw new Error('Error en la respuesta de la API');
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        return data; 
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        return []; 
    }
}

function createCard(product) {
    const card = document.createElement('div');
    card.className = 'card bg-secondary mb-3';
    card.style.minWidth = '15rem';

    card.innerHTML = `
        <div class="card-body">
            <h4 class="card-title">${product.name}</h4>
            <p class="card-text">Precio: $${product.price}</p>
            <p class="card-text">Cantidad: ${product.amount}</p>
            <button type="button" class="btn btn-success" onclick="window.location.href='add/factura.html';">Vender</button>
        </div>
    `;
    
    return card;
}

async function displayCards() {
    const cardContainerProducts = document.getElementById('cardContainerProducts');
    const suppliers = await fetchData();

    suppliers.forEach(supplier => {
        if (supplier.products && Array.isArray(supplier.products)) {
            supplier.products.forEach(product => {
                const card = createCard(product);
                cardContainerProducts.appendChild(card);
            });
        } else {
            console.warn("Supplier has no products:", supplier);
        }
    });
}


displayCards();
