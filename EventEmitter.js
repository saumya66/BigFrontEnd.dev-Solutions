class EventEmitter {
  constructor(){
    this.mp = new Map()
  }
  subscribe(eventName, callback) { //when someone subscribes we just need to store a mapping of the type of event to the callback & the no. of times the event has been subscribed to   
    if(!this.mp.has(eventName))
        this.mp.set(eventName, {cb : callback, count : 1})//storing the first subscription
    else{
      let curCount = this.mp.get(eventName).count
      this.mp.set(eventName, {cb : callback, count : ++curCount }) //storing the subsequent subscriptions after the first one
    }
    return {
      release: ()=>{  // a release function is returned to the subscriber
        if(this.mp.has(eventName)){  // if we have the subscription we just need to reduce the subscription by 1 
          let {cb, count} = this.mp.get(eventName)
          this.mp.set(eventName, {cb : cb, count : --count })
          if(count == 0) // if all subscription are released then we just delete the subscription
            this.mp.delete(eventName)
        }
      }
    }
  }

  emit(eventName, ...args) {//when an event is emitter we need to just run the callback as much times as the event has been subscribed to
    if(this.mp.has(eventName)){
      let {cb, count} = this.mp.get(eventName)
      while(count-->0)
        cb(...args)
    }
  }
}
 
