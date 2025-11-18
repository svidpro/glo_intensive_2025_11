const patchTestData = () => {
  /** @type {HTMLDivElement} */
  const cartBtn = document.getElementById('cart');
  /** @type {HTMLDivElement} */
  const cartModal = document.querySelector('.cart');
  /** @type {HTMLDivElement} */
  const cartClose = document.querySelector('.cart-close');

  fetch('http://localhost:3000/goods/25', {
    method: 'PATCH',
    body: JSON.stringify({
      price: Math.random(),
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

export default patchTestData