function all(promises) {
  return new Promise((resolve, reject)=>{
    //declaring required variables
    let ans= [],error;
    let lastPromise = Promise.resolve()  
    let allPromises=[]

    for(let maybeAPromise of promises){ //this loop goes through each thing in promise[] & converts them into a promise incase they are not already! for ex - sometimes people pass numbers
      let definitelyAPromise = Promise.resolve(maybeAPromise) //.resolve() to convert anything to a promise
      allPromises.push(definitelyAPromise) // allPromises will contain all the promises on which we can work upon
    }
    if(allPromises.length){ //if this is not true we will just resolve an empty array []
      for(const promise of allPromises){
        lastPromise=promise.then(
          (val)=>ans.push(val),//onResolution this is triggered, and we push the resolved value to ans array
          function(err){//onRejection this is triggered, and we reject it immediately
            reject(err)
          })
      }
    }
    lastPromise.then(()=>{//after all the promises are resolved we resolve our ans
        resolve(ans)//just resolving with our ans array
    })
  })
}
