function elementAfter(arr, target){
  let left = 0, right = arr.length-1 , mid=0;
  let maxIndex = -2;
  while(left<=right) //goal of this loop is to find the last appearance of target or maxIndex
  {
    mid = Math.floor((left + right)/2)//finding the mid
    if(arr[mid] === target){//if target is found 
      maxIndex = Math.max(mid, maxIndex) //storing the largest of all the target's indexes
      left = mid + 1  //shifting to the right of mid to search target, as right has more larger indexes  
    }
    if(target < arr[mid])//If yes, shift the searching area to right of mid
    {
      right = mid - 1 
    }
    if(target > arr[mid]){//If yes, shift the searching area to left of mid
      left = mid + 1
    }
  }
  return maxIndex==-2 ? undefined : arr[maxIndex+1] //if maxIndex was not changed then we did not found the element, thus returning undefined, else we return the element just after the last appearance of target element
}
