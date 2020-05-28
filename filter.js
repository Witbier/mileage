const filter = (collection, func) => {
  let filteredArr = [];
  if (Array.isArray(collection)) {
    collection.forEach(val => func(val) && filteredArr.push(val));
  } else {
    for (const key in collection) {
      func(collection[key]) && filteredArr.push(collection[key]);
    }
  }
  return filteredArr;
};

export default filter;
