const postTestData = () => {
  /** @type {HTMLDivElement} */
  const cartBtn = document.getElementById('cart');
  /** @type {HTMLDivElement} */
  const cartModal = document.querySelector('.cart');
  /** @type {HTMLDivElement} */
  const cartClose = document.querySelector('.cart-close');

  fetch('http://localhost:3000/goods', {
    method: 'POST',
    body: JSON.stringify({
      title: "Игра Onrush (PS4 Sony) " + Math.random(),
      price: Math.random(),
      sale: true,
      img: "https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg",
      category: "Игры и софт 123"
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

export default postTestData