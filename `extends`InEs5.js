const myExtends = (SuperType, SubType) => {
  
  function ExtendType(...args){

    //the below 2 lines are used to initialize ExtendType's constructor by calling the the constructor of Subtype & Supertype
    SuperType.call(this,...args)
    SubType.call(this,...args)

    //ExtendType's constructor's prototype points to SubType
    this.__proto__ = SubType.prototype
    // Object.setPrototypeOf(this, SubType.prototype);
  }
  //link Subtype's prototype chain to Supertype prototype
  Object.setPrototypeOf(SubType.prototype,SuperType.prototype)

  //lets ExtendType to use static members of SuperType
  Object.setPrototypeOf(ExtendType, SuperType)

  return ExtendType
}
