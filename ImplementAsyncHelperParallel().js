

//Have added question specific explanation to this code but to understand how all of this works the link below
//has the code & explanation of it's previous question (Implement Async Helper - Sequence() whose base code is almost same as this)
//Understanding this previous question's code will help understand this.
//Question Link : https://bigfrontend.dev/problem/implement-async-helper-sequence
//Code & Comments : https://github.com/saumya66/BigFrontEnd.dev-Solutions/blob/main/ImplementAsyncHelperSequence().js
function parallel(funcs){
  let promisifiedFuncs = funcs.map((func)=>promisify(func))
  return function(callback,data){
    let ans=[],promise;
    let error=null;
    for(let func of promisifiedFuncs){
      promise = func.then(
                (d)=>ans.push(d), //making the ans array here & btw this funcition is triggered when the function is successfully resolved with a data
                function(err){ //this function is trigger when the promise is rejected with an error
                  if(!error){ //🛠️ if there is no error & I get an error, we flag it & make a func call that we have got error
                    error=err;
                    callback(err,undefined)
                    }
                  }
                )
    }
    promise.then(()=>{
      if(!error) //if we had got error earlier then we have already made our function call sending that error (in 🛠️) & there is no answer 
       callback(undefined,ans) //make this call if we have had no errors only
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

