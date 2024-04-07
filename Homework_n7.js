console.clear()
function formatPhoneNumber(arr) {
    if (arr.length !== 10) {
        return "array uzunligi 10 dan oshmasligi kerak"
    }
    const areaCode = arr.slice(0, 3).join('')
    const firstPart = arr.slice(3, 6).join('')
    const secondPart = arr.slice(6).join('')

    return `(${areaCode}) ${firstPart}-${secondPart}`
}
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))