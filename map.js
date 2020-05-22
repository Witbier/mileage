const map = (collection, func) => {
  if (typeof func === "function") {
    let result = [];
    if (Array.isArray(collection)) {
      collection.forEach(ele => result.push(func(ele)));
    } else {
      for (const key in collection) {
        result.push(func(collection[key]));
      }
    }
    return result;
  } else {
    alert("Please enter the valid function in second argument");
  }
};
export default map;
