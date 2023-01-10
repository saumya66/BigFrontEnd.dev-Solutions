// To understand the algorithm this link is helpful : https://www.programiz.com/dsa/quick-sort
function qsort(arr, left, right){
  if(left<0 || right>=arr.length || left >= right) return //In any of such scenario we return as its invalid & we can't proceed further
  let key = arr[right] //storing the last element as key or point of partition for this iteration
  let pointer=right; //pointer will be the index of the first element greater than our key, i initilize it as the key's index as, in case there is no element greater than this, then the partition index will be this itself

  //this loop helps to bring all elements less that key to its left and all element greater that key to it's right (pls refer to the above link for it's explanation)
  for(let i = left; i<right;i++)
  {
    if(arr[i]>key && pointer==right)
    {
      pointer = i;
    }
    else if(arr[i]<=key && pointer != right )
    {
      [arr[pointer], arr[i]] = [ arr[i],arr[pointer]]
      pointer += 1
    }
  }
  let partitionIndex
  if(pointer != right){ //if a greater element than key was found then now we need to swap our key with that
     [arr[pointer], arr[right]] = [ arr[right],arr[pointer]]
  }
  partitionIndex = pointer
  qsort(arr, partitionIndex+1, right)//recursing over the left of partition
  qsort(arr, left, partitionIndex-1)//recursing over the right of partition
}

function quickSort(arr) {
  qsort(arr, 0 , arr.length-1)
}
