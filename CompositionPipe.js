function pipe(funcs) {
	 return function(arg) {
     return funcs.reduce((result, func) => {
       return func.call(this, result)
     }, arg)
  }
}
