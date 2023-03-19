// BEGIN
export const swap = (massiv) => {

    if (massiv.length == 1) {
        return massiv;
    } else if (massiv.length == 0) {
        return massiv;
    } else {
        let temp = massiv[0];
        massiv[0] = massiv[massiv.length - 1];
        massiv[massiv.length - 1] = temp;
        return massiv;
    }
};
// END