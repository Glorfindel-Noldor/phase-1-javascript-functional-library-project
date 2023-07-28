function myEach(object, callback) {
  for (let key in object) {
    callback(object[key]);
  }
  return object;
}

function myMap(object, callback) {
  let newArray = new Array();
  for (let key in object) {
    let result = callback(object[key]);
    newArray.push(result);
  }
  return newArray;
}

function myReduce(collection, callback, initialValue) {
  const keys = Object.keys(collection);
  let acc = initialValue !== undefined ? initialValue : collection[keys[0]];
  const startingIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startingIndex; i < keys.length; i++) {
    const key = keys[i];
    acc = callback(acc, collection[key], collection);
  }
  return acc;
}

function myFilter(object, callback) {
  let newArray = new Array();
  for (let key in object) {
    let value = object[key];
    if (callback(value)) {
      newArray.push(value);
    }
  }
  return newArray;
}

function myFind(collection, predicate) {
  for (const element of collection) {
    if (predicate(element)) {
      return element;
    }
  }
  return undefined;
}

function mySize(x) {
    if (Array.isArray(x)) {
      return x.length;
    } else if (typeof x === 'object') {
      return Object.keys(x).length;
    } 
}
  
function myFirst(tester,n){
    if (Array.isArray(tester)) {
        return n ? tester.slice(0, n) : tester[0];
    }else if (typeof tester === 'object') {
        const keys = Object.keys(tester);
        return n ? keys.slice(0, n).reduce((result, key) => {
          result[key] = tester[key];
          return result;
        }, {}) : keys[0];
      }
}

function myLast(tester, n) {
    if (Array.isArray(tester)) {
      return n ? tester.slice(-n) : tester.slice(-1)[0];
    } else if (typeof tester === 'object') {
      const keys = Object.keys(tester);
      const lastKeys = n ? keys.slice(-n) : keys.slice(-1);
      return lastKeys.reduce((result, key) => {
        result[key] = tester[key];
        return result;
      }, {});
    }
  }

function myKeys(converter){
let conver;
conver = Object.keys(converter);
return conver;        
}

function myValues(converter){ 
var conver = Object.values(converter)
return conver;
}