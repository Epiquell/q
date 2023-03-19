// BEGIN
const addPrefix = (names, prefix) => {
    let newNames = [];

    for (let i of names) {

        let name = prefix + ' ' + i;

        newNames.push(name);
    }
    return newNames;
}


export default addPrefix;
// END