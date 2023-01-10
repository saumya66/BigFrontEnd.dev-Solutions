class FakeTimer {
  constructor() {
    this.original = { //saving original functions in this object
      setTimeout: window.setTimeout,
      clearTimeout: window.clearTimeout,
      dateNow: Date.now,
    }
    this.timerId = 1; //tracks the id of setTimeout()
    this.currentTime = 0; //tracks the currentTime 
    this.queue = []; //stores the settimeouts 
  }
  install() {
    window.setTimeout = (cb, time, ...args) => {
      const id = this.timerId++;
      this.queue.push({ //new settimeout and various data related to it is pushed 
        id,
        cb,
        time: time + this.currentTime,
        args,
      });
      this.queue.sort((a, b) => a.time - b.time); //sorting in ascending order of the time of each settimeout
      return id;
    }
    window.clearTimeout = (removeId) => {
      this.queue = this.queue.filter(({ id }) => id !== removeId);  //settimeout with id = removeId is filtered out 
    }
    Date.now = () => {
      return this.currentTime;
    }
  }
  
  uninstall() {// original functions are reassigned 
    window.setTimeout = this.original.setTimeout;
    window.clearTimeout = this.original.clearTimeout;
    Date.now = this.original.dateNow;
  }
  
  tick() { //calling this starts the execution of all settimeouts synchronously
    while(this.queue.length) {
      const { cb, time, args } = this.queue.shift(); //settimeout is popped from the top 
      this.currentTime = time; //current time is set to the time after execution of this settimeout
      cb(...args); //callback of the settimeout is called with its arguments
    }
  }
}
