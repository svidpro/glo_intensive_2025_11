export const searchFilter = (goods, str) => {
    return goods.filter(goodsItem => {
        return goodsItem.title.toLowerCase().includes(str.toLowerCase())
    })
}

export const categoryFilter = (goods, str) => {
    return goods.filter(goodsItem => {
        return goodsItem.category === str
    })
}

const priceFilter = (goods, min, max) => {
    return goods.filter(goodsItem => {
        if (min === '' && max === '') {
            return goodsItem
        } else if (min !== '' && max !== '') {
            return goodsItem.price > +min && goodsItem.price < +max
        } else if (min !== '' && max === '') {
            return goodsItem.price > +min
        } else if (min === '' && max !== '') {
            return goodsItem.price < +max
        }
    })
}

const saleFilter = (goods, checked) => {
    return goods.filter(goodsItem => {
        if (checked) {
            return goodsItem.sale === checked
        } else {
            return goodsItem
        }
    })
}

export const catalogFilter = (goods, min, max, checked) => {
    return priceFilter(
        saleFilter(goods, checked), min, max
    )
}
/**
 * Экспорт нескольких функций
 * export default - экспортирует только одну функцию
 */