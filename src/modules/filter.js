import renderGoods from "./renderGoods"
import getData from "./getData"
import { catalogFilter } from "./filters"

const filter = () => {
    const minInput = document.getElementById('min')
    const maxInput = document.getElementById('max')
    const checkBox = document.getElementById('discount-checkbox')
    const checkMark = document.querySelector('.filter-check_checkmark')

    minInput.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(catalogFilter(data, minInput.value, maxInput.value, checkBox.checked))
        });
    })

    maxInput.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(catalogFilter(data, minInput.value, maxInput.value, checkBox.checked))
        });
    })

    checkBox.addEventListener('click', () => {
        if (checkBox.checked) {
            checkMark.classList.add('checked')
        } else {
            checkMark.classList.remove('checked')
        }

        getData().then((data) => {
            renderGoods(catalogFilter(data, minInput.value, maxInput.value, checkBox.checked))
        });
    })
}

export default filter