//this link can help you get more clarity : https://www.programiz.com/dsa/insertion-sort
function insertionSort(arr) { 
  let size = arr.length
  //the purpose of this loop is after each iteration of this loop, to put the current i'th element (key) at it's correct position at it's left side 
  for(let i = 1;i<size;i++) //starting to sort from the second element towards the left of the array
  {
    let keyIndex = i    
    let key = arr[keyIndex]
    let j
    //this loop compares the key element to all it's left elements from left->right
    for( j = i-1;j>=0;j-- )
    {
      if(arr[j]>key){ //if an element is greater than it, we shifts it one element to the right 
        arr[j+1] = arr[j]
      }
      //if a smaller element than this is encountered it means it has found it's correct position i.e just after this small element and thus we break it 
      else if(arr[j]<=key){
        break
      }
    }
    arr[j+1] = key //storing our key on index after the smaller element than our key that we found above and broke
  }
  return arr
}
