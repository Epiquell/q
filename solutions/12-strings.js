// BEGIN
const makeCensored = (str, massiv) => {
    let censoredStr = [];
    let a = str.split(' ');
    for (let i of a) {
        if (massiv.indexOf(i) != -1) {
            censoredStr.push('$#%!');
        } else {
            censoredStr.push(i);
        }

    }
    censoredStr = censoredStr.join(' ');
    return censoredStr
}

export default makeCensored;
// END