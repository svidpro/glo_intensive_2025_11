const getDataReal = (str) => {
    return fetch(
      `https://glointensive202511-default-rtdb.firebaseio.com/goods.json${str ? `?search=${str}` : ''}`
    )
      .then((response) => {
        return response.json()
      })
}

export default getDataReal