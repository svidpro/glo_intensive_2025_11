const deleteTestData = () => {
  /** @type {HTMLDivElement} */
  const cartBtn = document.getElementById('cart');
  /** @type {HTMLDivElement} */
  const cartModal = document.querySelector('.cart');
  /** @type {HTMLDivElement} */
  const cartClose = document.querySelector('.cart-close');

  fetch('http://localhost:3000/goods/ac4a', {
    method: 'DELETE',
  });
}

export default deleteTestData