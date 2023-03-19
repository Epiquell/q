// BEGIN
const calculateAverage = (massiv) => {
    if (massiv.length == 0) {
        return null;
    }
    let s = 0;
    for (let i of massiv) {
        s += i;
    }
    return s / massiv.length;
}


export default calculateAverage;
// END