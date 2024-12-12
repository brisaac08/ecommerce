document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-container');

    fetch('./data/products.json')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p><strong>$${product.price}</strong></p>
                    <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
                `;
                productContainer.appendChild(productCard);
            });
        });
});
