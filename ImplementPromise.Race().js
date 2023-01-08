function race(promises) {
   return new Promise((resolve, reject)=>{
    //declaring required variables
    let ans= []
    let allPromises=[]

    for(let maybeAPromise of promises){ //this loop goes through each thing in promise[] & converts them into a promise incase they are not already! for ex - sometimes people pass numbers
      let definitelyAPromise = Promise.resolve(maybeAPromise) //.resolve() to convert anything to a promise
      allPromises.push(definitelyAPromise) // allPromises will contain all the promises on which we can work upon
    }
    if(allPromises.length){ //if this is not true we will just resolve an empty array []
      for(let i=0;i<allPromises.length;i++){
        allPromises[i]
                    .then((val)=>resolve(val))     //onResolution this is triggered, and we are just resolving the first val that is fulfilled 
                    .catch((err)=>reject(err))    //onRejection this is triggered,and we are just rejecting the first error
      }
    }
  })
}
