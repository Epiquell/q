// BEGIN
const getSameParity = (massiv) => {
    if (massiv.length == 0) {
        return [];
    }
    let resultMassiv = [];
    for (let i of massiv) {
        if (Math.abs(i % 2) == Math.abs(massiv[0] % 2)) {
            resultMassiv.push(i)
        }
    }
    return resultMassiv
}
export default getSameParity;
// END