// BEGIN
export const get = (massiv, index, standart = null) => {
    
    if (index < massiv.length && index >= 0) {
        return massiv[index];
    } 
    else {
        return standart;
    }
}
// END