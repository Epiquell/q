// BEGIN
export const calculateSum = (massiv) => {
    let s = 0;

    for (let i of massiv) {

        if (i % 3 == 0) {
            s += i;
        }
    }
    
    return s;
}
// END