class NodeStore {
   /**
   * @param {Node} node
   * @param {any} value
   */
  constructor(){
    this.store = {} //simply using object to track nodes
  }
  set(node, value) {// adding nodes 
   this.store.node = value 
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) { //getting nodes
   return this.store.node
  }
  
  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) { //searching the queried node in store object
    return this.store.node != undefined ? true : false
  }
}
