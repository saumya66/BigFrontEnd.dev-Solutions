function debounce(func, wait, option = {leading: false, trailing: true}) {
  let timeout;//track the time 
  let isWaitDone= true;
  let prevArg;
  return function(...args){
    clearTimeout(timeout); //when the debounced function is called, the current progress of timeout is cancelled first
    if(option.leading && !option.trailing) //if leading true & trailing false
    {
      if(isWaitDone)func(...args); //if we are not waiting for anyone, then trigger the arrived function call.
      isWaitDone = false;
      timeout = setTimeout(()=>{console.log("hi"); isWaitDone= true;}, wait); //wait but donot invoke anything
    }
    if(!option.leading && option.trailing){ //if leading false & trailing false
    timeout = setTimeout(()=>func(...args), wait); //just waiting and then invoking
    }
    if(option.leading && option.trailing)//if leading true & trailing false
    {
      if(isWaitDone){ //if waiting for noone
        func(...args); //just trigger the arrived func
        prevArg = args[0]; //store it's arguments
      }
      isWaitDone = false;
      timeout = setTimeout(()=>{
        if(prevArg!=args[0])//checking whether the current arguments are different from the previous to avoid calling the prev function again
          func(...args); 
        isWaitDone= true;
      }, wait);
    }
  }
}
 
