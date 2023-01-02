function memo(func, resolver='_') {
  let isResolverPassed = true;
  if(resolver == '_'){
    isResolverPassed = false
  }
  let lastCache;
  let lastReturned;
  return function(...args){
    let curFuncCallResolver = isResolverPassed ? resolver(...args) : Array.from(args).join(resolver).toString();//just checking if resolve is passed or not, if passed just calling that function to get the resolver else just making an unique one!
    if(curFuncCallResolver==lastCache){ //checking if we have memorized or shall i say memoized it, if yes returning it or else calling the function.
      return lastReturned;
    }
    else {
      let ans = func.call(this,...args); //using call function to all pass the 'this' context of the object calling it
      lastReturned = ans;
      lastCache = curFuncCallResolver
      return ans;
    }
  }
}
