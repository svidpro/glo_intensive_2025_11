export const searchFilter = (goods, str) => {
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(str.toLowerCase())
    })
}

export const categoryFilter = (goods, str) => {
    return goods.filter((goodsItem) => {
        return goodsItem.category === str
    })
}
/**
 * Экспорт нескольких функций
 * export default - экспортирует только одну функцию
 */