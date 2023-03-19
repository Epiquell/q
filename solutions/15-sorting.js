// BEGIN
const bubbleSort = (m) => { 
    for (let j = m.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (m[i] > m[i + 1]) {
                let a = m[i];
                m[i] = m[i + 1];
                m[i + 1] = a;
            }
        }
    }

    return m;
}


export default bubbleSort;
// END