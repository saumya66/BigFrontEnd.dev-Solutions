function curry(fn) {
   return function curriedFunctin(...args){
    if(args.length >= fn.length  ){
      return fn(...args);
    }
    else{
      return function(...args2){
        return curriedFunctin(...args,...args2);
      }
    }
  }
}
