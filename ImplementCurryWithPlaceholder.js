function curry(fn) {
  return function curriedFunctin(...args){
    let placeholderPresent = false;
    for(let a of args){
      if(a==curry.placeholder){placeholderPresent=1;break;}
    }
    if(args.length >= fn.length && !placeholderPresent){
      return fn(...args);
    }
    else{
      return function(...args2){
        const replaced = args.map(arg => arg==curry.placeholder ? args2.shift() : arg);
        return curriedFunctin(...replaced,...args2);
      }
    }
  }
}


curry.placeholder = Symbol()
