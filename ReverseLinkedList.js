const reverseLinkedList = (list) => {
    let curElem = list //making a new head
    let prev = null  //head's next element will be it's previous element which is null 
    while(curElem != null)
    {
        curNext = curElem.next; //storing the next of current element as this will be the current element in next iteration
        curElem.next = prev //current element's next will be it's previous element
        prev = curElem //for the next iteration, previous element will be the current element
        curElem = curNext //for the next iteration, the next of current element will be the current element
    }
    return prev //return the last element which is store in prev as curElem at last becomes null
}
