class PriorityQueue {
  constructor(compare) {
    this.compare = compare;
    this.arr=[]
  }

  /**
   * return {number} amount of items
   */
  size() {
    return this.arr.length//returning size of arr
  }

  /**
   * returns the head element
   */
  peek() {
    return this.arr[0] //returning first element in array
  }

  /**
   * @param {any} element - new element to add
   */
  add(element) {
   this.arr.push(element); //pushing an element into array
   this.arr.sort(this.compare) //using compare to sort array in ascending or descending order 
  }

  /**
   * remove the head element
   * @return {any} the head element
   */
  poll() {
    let a = this.arr.shift() //removing the first element in arr to return
    return a
  }
}
