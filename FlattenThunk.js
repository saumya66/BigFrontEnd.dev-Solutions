function flattenThunk(thunk) {
  return function(cb){
    const cbWrapper= (error, data)=>{ //this is main, using this wrapper we are sort of making another layer between calling of func3 and the executing the original callback that is being passed in, so that we can get the arguments i.e error and data that are being passed into it and use it 
      
      if(error){ //if error is passed then just call original callback with error to print it
        cb(error)
      }
      else if(typeof data == 'function'){ //if it's a function then we need to call this funtion
        data(cbWrapper)
      }
      else{  //if correct data is passed then just call original callback with data to print it
        cb(error,data)
      }
    }
    thunk(cbWrapper) //calling the first function passed i.e thunk with cbWrapper as the callback
  }
}
