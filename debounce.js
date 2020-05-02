function debounce(fn, delay){
    let ref = null;
    return function(...args) {
        const context = this;
        clearTimeout(ref);
        ref = setTimeout(() => fn.apply(context, args), delay);
    }
}

export default debounce;