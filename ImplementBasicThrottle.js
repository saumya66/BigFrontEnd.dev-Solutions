function throttle(func, wait) {
  let hasThrottleTimedOut = null; //assigning starting values
  let storedEvent =   null;
  return throttledEventHandle= (event)=>{ //this is returned when someone wants to makes a function throttled, this func remembers the passed func & wait time due to clousures property.
    storedEvent = event;  //stores the most recently arrived event
    if(!hasThrottleTimedOut){
      func(event);
      storedEvent = null;  //nulled as event is used now
      hasThrottleTimedOut =true;  //throttle has timed out thus the callback func was executed.
      setTimeout(()=>{
        hasThrottleTimedOut=null; //timout over, and we are open to execute if there are new events
        if(storedEvent)throttledEventHandle(storedEvent); //if wait time is done & do we have a event stored within that time?, if yes, then execute it
      },wait)
    }
  }
}
