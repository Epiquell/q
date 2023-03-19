// BEGIN
export const flatten = (massiv) => {
    let resMassiv = [];
    for (let element of massiv) {
        if (typeof(element) == 'object') {
            resMassiv.push(...element)
        } else {
            resMassiv.push(element)
        }
    }
    return resMassiv
}
// END