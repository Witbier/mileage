function curry(fn) {
    return function(...args) {
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      }
      return function(...newArgs) {
        return curry.apply(this, [...args, ...newArgs]);
      };
    };
  }
  
  export default curry;
  
