function sequence(funcs){
  let promisedFuncs = funcs.map((func)=>promisify(func)) //making promises of all the sequence of functions
  return function(cb, data) //returned to const asyncTimes4 when sequence() is called
  {
    let promise = Promise.resolve(data) //making promise with the 1 that is sent with the asyncTimes4() call
    for(const promisedFunc of promisedFuncs)
    {
      promise = promise.then((data)=>promisedFunc(data)) //chaining 
    }
    promise.then((d)=>cb(undefined,d))//calling the callback sent with asyncTimes4() call as the chaning is finished & we have the final data
    .catch(cb) 
  }
}

function promisify(callback) {//the callback here is basically the each function in the sequence of functions
  return function (input) { //promisedFunc(data) calls this & gets returned this below promise
    return new Promise((resolve, reject) => {
      callback((err, data) => {//in the given example in q, this callback will call asyncTimes2()as it was passed to promisify if you rememeber
        if (err) {
          reject(err)
          return
        }
        resolve(data)
      }, input)
    })
  } 
}
