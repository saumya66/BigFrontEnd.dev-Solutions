function any(promises) {
   return new Promise((resolve, reject)=>{
    //declaring required variables
    let errors= []
    let lastPromise = Promise.resolve()  
    let allPromises=[]

    for(let maybeAPromise of promises){ //this loop goes through each thing in promise[] & converts them into a promise incase they are not already! for ex - sometimes people pass numbers
      let definitelyAPromise = Promise.resolve(maybeAPromise) //.resolve() to convert anything to a promise
      allPromises.push(definitelyAPromise) // allPromises will contain all the promises on which we can work upon
    }
    if(allPromises.length){ 
      for(let i=0;i<allPromises.length;i++){
        lastPromise=allPromises[i]
                    .then((val)=>resolve(val))     //onResolution this is triggered, and resolves as soon as one is fulfilled
                    .catch((err)=>errors[i]=err)    //onRejection this is triggered, and stores all the errors in array to be rejected later if nothing is resolved
      }
    }
    lastPromise.then(()=>{//if we reach here it means nothing was resolved thus after the last promise is completed we are rejecting our errors array
        reject(new AggregateError( 
          'No Promise in Promise.any was resolved', 
          errors
        ))
    })
  })
}
