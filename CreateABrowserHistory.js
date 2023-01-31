class BrowserHistory {
  /**
   * @param {string} url
   * if url is set, it means new tab with url
   * otherwise, it is empty new tab
   */
  constructor(url) {
    this.curIndex = 0 //starting index will be 0 
    this.arr = [] //maintains the urls in their current order
    this.arr.push(url) //putting the passed url into array
  }

  visit(url) {
    this.arr = this.arr.slice(0,this.curIndex+1) //if new url is visited it will be the only url next to our current url so removing all urls after our current url
    this.arr.push(url)//now pushing the visited url after the current url
    this.curIndex += 1 //visited url becomes the current url
  }
  
  /**
   * @return {string} current url
   */
  get current() {
    return this.arr[this.curIndex] //returns current url
  }
  
  // go to previous entry
  goBack() {
    if(this.curIndex>0)  //can't go back futher back than the first url
      this.curIndex -= 1
  }
  
  // go to next visited url
  forward() {
    let curLastIndex = this.arr.length - 1
    if(this.curIndex < curLastIndex) //cant go more forward than the last url
      this.curIndex += 1
  }
}
