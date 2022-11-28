function debounce(func, wait) {
  let timeout;//track the time 
  return function(...args){
    clearTimeout(timeout); //when the debounced function is called, the current progress of timeout is cancelled first
    timeout = setTimeout(()=>func(...args), wait); //then the settimeout counting starts again for the full 'wait' time
  }
}
