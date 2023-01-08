//Have added question specific explanation to this code but to understand how all of this works the link below
//has the code & explanation of it's 2 previous questions (Implement Async Helper - Sequence() & Parallel() whose base code is almost same as this)
//Understanding this previous question's code will help understand this.
//Sequence() Question Link : https://bigfrontend.dev/problem/implement-async-helper-sequence
//Sequence() Code & Comments : https://github.com/saumya66/BigFrontEnd.dev-Solutions/blob/main/ImplementAsyncHelperSequence().js
//Sequence() Question Link : https://bigfrontend.dev/problem/implement-async-helper-sequence
//Sequence() Code & Comments : https://github.com/saumya66/BigFrontEnd.dev-Solutions/blob/main/ImplementAsyncHelperSequence().js

function race(funcs){
  let promisifiedFuncs = funcs.map((func)=>promisify(func))
  return function(callback,data){
    let ans,promise;
    let error=null;
    for(let func of promisifiedFuncs){
      promise = func.then(
                (d)=>
                !error && !ans ? ans=d : null, //if we have no error or answer till now then we store this as this will be our answer at the end
                function(err){
                  if(!ans && !error){
                    error=err; //if we have no ans or error till now then we store this as this will be our answer at the end
                    }
                  }
                )
    }
    promise.then(()=>{ //here we just make the callback with the first error or answer that we have store from above operations!
      if(!error){ 
        callback(undefined,ans)
      }
      else{
        callback(error,undefined)
      }
    })
  }
}

function promisify(func)
{
  return new Promise((resolve, reject)=>{
    func((err,data)=>{
      if(err){
        reject(err)
        return
      }
      resolve(data)
    })
  })
}
