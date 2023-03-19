const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
};

// BEGIN
export const getTheNearestLocation = (locations, point) => {
    if (locations.length == 0) {
        return null;
    }

    let distance = 10000000000000;
    let coordinati;
    let name = '';

    for (let element of locations) {
          let [a, b] = element;
          
          let dist = getDistance(b, point)
          if (dist <= distance) {
                distance = dist;
                coordinati = b;
                name = a;
          } 
    }
    return [name, coordinati]
}
// END
