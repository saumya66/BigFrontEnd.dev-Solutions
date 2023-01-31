Function.prototype.mycall = function(thisArg, ...args) {
  let obj = Object(thisArg ? thisArg : window)//if 'thisArgs' is present, we convert it into a object else we use the window as no 'thisArg' was passed
  let func = Symbol() //creating a unique name to store our function i.e this
  obj[func] = this //storing the function 
  let ans  = obj[func](...args) //calling the function with arguments
  delete obj[func] //deleting the 'func' to  avoid any issues further
  return ans
}
