// BEGIN
export const getMax = (massiv) => {
    if (massiv.length == 0) {
        return null;
    }

    let max = massiv[0];
    for (let element of massiv) {
        if (element >= max) {
            max = element;
        }
    }

    return max;
}
// END