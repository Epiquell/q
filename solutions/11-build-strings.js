// BEGIN
const buildDefinitionList = (massiv) => {
    if (massiv.length == 0 || massiv[0].length == 0) {
        return '';
    }


    let result = '';
    for (let i of massiv) {
        result += `<dt>${i[0]}</dt>`
        result += `<dd>${i[1]}</dd>`
    }
    result = '<dl>' + result + '</dl>'
 
    return result;
}

export default buildDefinitionList;
// END