const _ = require("lodash"); 

// BEGIN
const getSameCount = (m1, m2) => {

    let uniqElemenets = new Set(_.intersection(m1, m2));
    let massiv = Array.from(uniqElemenets);
    let count = massiv.length;

    return count;
}

export default getSameCount;
// END