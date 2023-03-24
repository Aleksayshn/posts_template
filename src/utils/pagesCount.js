export const getPageCount = (totalCountPost, limit) => {
    return Math.ceil(totalCountPost / limit)
}
