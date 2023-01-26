function spyOn(obj, methodName) {
  let calls =[]
  let func =  obj[methodName] //storing original function to call later
  if(typeof func != 'function')throw new Error("Error")//if passed thing is not a valid function then throw error 

  obj[methodName]= (...args)=>{ //still need to understand how this gets triggered pls comment if you know!
      calls.push(args) //passed args are pushed into array
      return func.call(this,...args) //stored original function is called here
  }
  return { //object with call variable is returned
    calls
  }
}
