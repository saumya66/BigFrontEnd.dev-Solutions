class Queue {
   constructor(){
     this.stack = new Stack()
   }
  enqueue(element) { 
    this.stack.push(element)//just pushing element to the end
  }
  peek() { 
    let revStack = new Stack(); //made a new stack
    while(this.stack.size()>0){ //to make a new stack with reverse order of element from our main stack 
      revStack.push(this.stack.pop())
    }
    let peekElem =  revStack.peek(); //the last element in the new rev stack is actually our first/head element so storing it to return later 
    while(revStack.size()>0){
      this.stack.push(revStack.pop())//putting all elements back to our main stack as it was originally
    }
    return peekElem
  }
  size() { 
    // return count of element
    return this.stack.size()
  }
  dequeue() {
    // remove the head element
    let revStack = new Stack();
    while(this.stack.size()>1){
      revStack.push(this.stack.pop()) //to make a new stack with reverse order of element, just leaving one element in the main stack so that we can store & deque/remove it
    }
    let dequedElem = this.stack.pop() //storing the only element present in main stack or the head element to return later
    while(revStack.size()>0){
      this.stack.push(revStack.pop()) //put all elements in rev stack back to main stack
    }
    return dequedElem
  }
}
