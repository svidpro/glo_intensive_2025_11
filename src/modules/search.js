import getDataReal from "./getDataReal" // тестовый пример поиска на сервере
import renderGoods from "./renderGoods"
import getData from "./getData"
import { searchFilter } from "./filter"

const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input')

    searchInput.addEventListener('input', (event) => {
        const value = event.target.value
        getDataReal(value).then((data) => {
            console.log(getDataReal)
            // renderGoods(data)
        });
    })

    searchInput.addEventListener('input', (event) => {
        const value = event.target.value
        getData().then((data) => {
            renderGoods(searchFilter(data, value))
        });
    })
}

export default search