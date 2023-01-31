/*
Essentially when you call a 'new Constructor()' you create an object. so, we too have to do the same thing here.
*/
const myNew = (constructor, ...args) => {

  let obj = Object.create(constructor.prototype)//creating the object with the prototype of constructor to get all it's variables and stuff.
  let finalObj = constructor.apply(obj,args)//Now we need to call the constructor with our 'obj'. so, we use the apply method & pass 'obj' as 'this' to the constructor() function 
  if(finalObj && typeof finalObj === 'object') //if the above line returned an object then return it else just return the first object
  {
    return finalObj
  }
  else return obj
}
