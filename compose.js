function compose(...fncs){
    return function(...args) {
        const [fn, ...rest] = fncs.reverse();
        return rest.reduce(function(rslt, fun) {return fun(rslt);}, fn(...args));
    }
}

export default compose;