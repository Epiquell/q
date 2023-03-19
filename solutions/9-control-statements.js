// BEGIN
const getTotalAmount = (massiv, currency) => {
    let s = 0;

    for (let i of massiv) {
        let a = i.split(' ');
        let valuta = a[0]
        let value = Number(a[1])
        if (valuta == currency) {
            s += value;
        }
    }
    return s;
}
export default getTotalAmount;
// END