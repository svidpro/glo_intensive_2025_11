const getData = () => {
    /** @type {HTMLDivElement} */
    const cartBtn = document.getElementById('cart');
    /** @type {HTMLDivElement} */
    const cartModal = document.querySelector('.cart');
    /** @type {HTMLDivElement} */
    const cartClose = document.querySelector('.cart-close');

    fetch('https://glointensive202511-default-rtdb.firebaseio.com/goods.json')
      .then(response => response.json())
      .then(json => console.log(json))
}

export default getData