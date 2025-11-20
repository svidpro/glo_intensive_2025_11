import renderCart from "./renderCart";
import postData from "./postData";

const cart = () => {
    /** @type {HTMLDivElement} */
    const cartBtn = document.getElementById('cart');
    /** @type {HTMLDivElement} */
    const cartModal = document.querySelector('.cart');
    /** @type {HTMLDivElement} */
    const cartClose = document.querySelector('.cart-close');
    /** @type {HTMLDivElement} */
    const goodsWrapper = document.querySelector('.goods');
    /** @type {HTMLDivElement} */
    const cartTotal = document.querySelector('.cart-total > span');
    /** @type {HTMLDivElement} */
    const cartWrapper = document.querySelector('.cart-wrapper');
    /** @type {HTMLDivElement} */
    const cartConfirmBtn = document.querySelector('.cart-confirm');

    const openModal = () => {
        cartModal.style.display = 'flex';

        const storageCart = localStorage.getItem('cart')
        /** @type {Array} */
        const cart = storageCart ? JSON.parse(storageCart) : []
        renderCart(cart);
        cartTotal.textContent = cart.reduce((sum, item) => {
            return sum + item.price
        }, 0)
    }
    const closeModal = () => {
        cartModal.style.display = 'none';
    }

    cartBtn.addEventListener('click', openModal);
    cartClose.addEventListener('click', closeModal);
    goodsWrapper.addEventListener('click', (event) => {

        /** @type {HTMLDivElement} */
        const target = event.target

        if (target.classList.contains('btn-primary')) {

            /** @type {HTMLDivElement} */
            const card = target.closest('.card')

            /** @type {BigInteger} */
            const id = +card.dataset.id

            /** @type {Array} */
            const goods = JSON.parse(localStorage.getItem('goods'))

            const goodsItem = goods.find((item) => {
                return item.id === id
            })

            const storageCart = localStorage.getItem('cart')
            /** @type {Array} */
            const cart = storageCart ? JSON.parse(storageCart) : []

            cart.push(goodsItem)

            localStorage.setItem('cart', JSON.stringify(cart))
            renderCart(cart);

        }
    })

    cartWrapper.addEventListener('click', (event) => {
        /** @type {HTMLDivElement} */
        const target = event.target

        if (target.classList.contains('btn-primary')) {
            /** @type {HTMLDivElement} */
            const card = target.closest('.card')

            /** @type {BigInteger} */
            const id = +card.dataset.id

            const storageCart = localStorage.getItem('cart')
            /** @type {Array} */
            const cart = storageCart ? JSON.parse(storageCart) : []

            const goodsItemId = cart.findIndex((item) => {
                return item.id === id
            })

            cart.splice(goodsItemId, 1)
            localStorage.setItem('cart', JSON.stringify(cart))
            renderCart(cart);
        }
    })

    cartConfirmBtn.addEventListener('click', () => {
        const storageCart = localStorage.getItem('cart')
        /** @type {Array} */
        const cart = storageCart ? JSON.parse(storageCart) : []

        postData(cart)

        localStorage.setItem('cart', [])
        renderCart([]);
        cartTotal.textContent = 0
    })
}

export default cart