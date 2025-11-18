import getData from "./getData";

const cart = () => {
    /** @type {HTMLDivElement} */
    const cartBtn = document.getElementById('cart');
    /** @type {HTMLDivElement} */
    const cartModal = document.querySelector('.cart');
    /** @type {HTMLDivElement} */
    const cartClose = document.querySelector('.cart-close');

    const openModal = () => {
        cartModal.style.display = 'flex';
    }
    const closeModal = () => {
        cartModal.style.display = 'none';
    }

    cartBtn.addEventListener('click', openModal);
    cartClose.addEventListener('click', closeModal);

    getData();
}

export default cart