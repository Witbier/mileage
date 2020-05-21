const throttle = (fn, delay) => {
    let invoker;
    let lastFunc;
    return function() {
        const args = arguments;
        const context = this;
        if (!invoker) {           
            fn.apply(context,args);
            invoker = Date.now(); 
        }
        else {
            clearTimeout(lastFunc)
            lastFunc = setTimeout(() => {
                if ((Date.now() - invoker) >= delay) {
                    fn.apply(context, args)
                    invoker = Date.now()
                }
            }, delay - (Date.now() - invoker));
        }
        };
    };
};

export default throttle;
