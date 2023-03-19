// BEGIN
const countUniqChars = (str) => {

    let uniqElements = new Set(str.split(''));
    let massiv = Array.from(uniqElements);
    let count = massiv.length;

    return count;
}

export default countUniqChars;
// END