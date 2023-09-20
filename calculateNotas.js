export const media = (array) => {
    const average = array.reduce((a, b) => a + b, 0) / array.length;
    return average
}
export const menor = (array) => {
    return Math.min(parseInt(array))
}
export const maior = (array) => {
    return Math.max(parseInt(array))
}
