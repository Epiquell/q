// BEGIN
export const reverse = (massiv) => {
    let newMassiv = [];
    for (let i = massiv.length - 1; i >= 0; i--) {
        newMassiv.push(massiv[i]);
    }
    
    for (let i = 0; i <= newMassiv.length - 1; i++) {
        massiv[i] = newMassiv[i]
    }
    
}
// END