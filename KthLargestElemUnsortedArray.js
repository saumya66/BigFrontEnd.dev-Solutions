class PriorityQueue{   //Using a Priority Queue to solve this 
  constructor(){
    this.arr = []
  }
  add(a){ //this function adds new element into the priority queue in an ascending order
    let correctIndex = this.arr.length 
    for(let i = 0;i<this.arr.length;i++) //finds the correct index for the element to be inserted at
    {
      if(a<this.arr[i]){
        correctIndex = i;
        break;
      }
    }
    for(let j = this.arr.length-1 ;j>=correctIndex;j--) //shifting elements after the correctIndex by 1 to the right to make place for the new element to be added at correct index
    {
      this.arr[j+1] = this.arr[j];
    }
    this.arr[correctIndex] = a; //element added at it's correct index
  }
}
function findKThLargest(arr, k) {
  let pq = new PriorityQueue()
  for(let elem of arr){ //adding all elements of array into priority queue to sort it
    pq.add(elem)
  }
  return pq.arr[arr.length-k] //returning the kth largest element from the sorted priority queue
}
