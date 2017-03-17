/*
** Write a function that will check if two objects deep equal each other
*/

var deepEqual = (obj1, obj2) => {

  if (typeof obj1 !== typeof obj2) {
    // return false if they are different types
    return false;
  } else if (typeof obj1 !== 'object') {
    // if they are both not objects, check for equality
    return obj1 === obj2;
  } else if (Array.isArray(obj1) !== Array.isArray(obj2)) {
    // if one is an array while the other isn't, return false
    return false;
  } else if (Array.isArray(obj1)) {
    if (obj1.length !== obj2.length) {
      // if they are both arrays but have different lengths, return false
      return false;
    } else if (!obj1.length) {
      // if empty array return true
      return true
    }
    // check if the array matches
    return obj1.reduce((equal, item, i) => equal ? deepEqual(item, obj2[i]) : false, true)
  } else {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      // if they have different numbers of properties, return false
      return false;
    } else if (!Object.keys(obj1).length) {
      // if they are both empty objects, return true
      return true;
    } else {
      // loop through the properties and check them recursively
      for (var prop in obj1) {
        if (!deepEqual(obj1[prop], obj2[prop])) {
          return false;
        }
      }
    }
  }
  return true;
}

var obj1 = {
  a: 1,
  b: [2],
  c: [{ d: 3 }, { e: 4 }, 10],
  f: {
    g: {
      h: {}
    }
  },
  i: {
    k: [1, 2, true, { l: [ { m: { n: { o: 11 } } } ] } ]
  }
}
var obj2 = {
  a: 1,
  b: [2],
  c: [{ d: 3 }, { e: 4 }, 10],
  f: {
    g: {
      h: {}
    }
  },
  i: {
    k: [1, 2, true, { l: [ { m: { n: { o: 11 } } } ] } ]
  }
}

console.log(deepEqual(obj1, obj2)); // true

obj1.i.k[3].l[0].m.n.p = 5;

console.log(deepEqual(obj1, obj2)); // false

obj2.i.k[3].l[0].m.n.p = 5;

console.log(deepEqual(obj1, obj2)); // true

obj1.i.k[3].l.push({});

console.log(deepEqual(obj1, obj2)); // false

obj2.i.k[3].l.push({});

console.log(deepEqual(obj1, obj2)); // true


// export default deepEqual;