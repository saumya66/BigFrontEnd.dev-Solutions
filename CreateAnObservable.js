//Simply said the thing passed into Observable, is to be observed and whatever this function
//says must be listened.
//And the Subscriber that is passed into "Observable.subscribe(subscriber)" does this job
//of listening using it's functions like next, error and complete.

class Observable {
  
  constructor(setup) {
    this.callback = setup //storing the passed callback in a variable
  }
 
  subscribe(subscriber) {
    const subscriberWrapper={//making a wrapper over subscriber to add a layer between it's execution and it's call, where in we can manage the subscription & how to trigger the subscriber
      isUnsubscribed: false,    //tracks the subscription state
      next: function(value){  //a wrapper over the next function
        if(this.isUnsubscribed)return //if unsubscribed then return 
        if(subscriber instanceof Function)return subscriber(value)//if subscriber is itself a function then just call itself 
        return subscriber.next ? subscriber.next(value) : null //if subscriber has a next function then call it 
      },
      error: function(value){
        if(this.isUnsubscribed)return
        this.unsubscribe() //after an error, we need to unsubscribe 
        return subscriber.error ? subscriber.error(value) : null //if subscriber has an error function then call it 
      },
      complete: function(){
        if(this.isUnsubscribed)return
        this.unsubscribe() //after completion, we need to unsubscribe 
        return subscriber.complete ? subscriber.complete() : null //if subscriber has a complete function then call it 
      },
      unsubscribe(){ //this function handles toggling subscription state
        this.isUnsubscribed = true
      }
    }
    this.callback(subscriberWrapper) //passing the subscriber into our callback so that we can use it to make various calls like next, error and complete.
    return subscriberWrapper //we return the wrapper
  }
}
