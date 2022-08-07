const closeCart = () => {
    const cart = document.getElementById("cart");
    const cartContainer = document.getElementById("cart-container");
    cart.style.transform = "translateX(100%)"
    cartContainer.style.backgroundColor = "rgba(0,0,0,0)";
    cartContainer.style.width = "0"
}

const openCart = () => {
    const cart = document.getElementById("cart");
    const cartContainer = document.getElementById("cart-container");
    cart.style.transform = "translateX(0%)"
    cartContainer.style.backgroundColor = "rgba(0,0,0,.5)";
    cartContainer.style.width = "100%"
}

document.getElementById("close-cart").addEventListener('click', closeCart);

document.getElementById("open-cart").addEventListener('click', openCart);