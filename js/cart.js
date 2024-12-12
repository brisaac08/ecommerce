let cart = [];

function addToCart(productId) {
    cart.push(productId);
    document.getElementById('cart-count').innerText = cart.length;
    alert('Producto agregado al carrito');
}
