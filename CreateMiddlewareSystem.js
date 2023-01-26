class Middleware {
  /**
   * @param {MiddlewareFunc} func
   */
  constructor(){
    this.req=null;  //This will keep track of the req object after each funtion call
    this.funcs = [] //This will contain all the function calls
  }
  use(func) {
    this.funcs.push(func) //storing all function calls
  }

  start(req) {
    this.req  = req  //assigning our req object - the value of req passed as this.req will keep track of all the changes to req object after each function call
    this.next() //starting the executing of all the stored function
  }
  next = (err)=>{
      let curFunc = this.funcs.shift() //taking out the first function
      try{
        if(curFunc.length == 2) //if the function just has 2 args i.e req and next
        {
          if(!err) //and we have no error from the previous function, then execute the current function
          {
            curFunc(this.req, this.next) //the this.next that we are passing here is again triggered inside the curFunc, leading to recursion of this.next function
          }
          else{
            this.next(err)//else if we have error from the previous function and 2 args, it means we have no 'error' argument, thus we skip the current function
          }
        }
        else if(err && curFunc.length == 3)//if we have 3 args i.e error, req and next , then we have an error and we need to execute it
        {
          curFunc(err, this.req, this.next)
        }
      }
      catch(e){
        this.next(e) //if in the above try block a function call throws error then we trigger the next function with the generated error.
      }
    }
}
