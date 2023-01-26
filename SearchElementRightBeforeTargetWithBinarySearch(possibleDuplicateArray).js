function elementBefore(arr, target){
   let left = 0, right = arr.length-1 , mid=0;
  let minIndex = 9999999;
  while(left<=right) //goal of this loop is to find the first appearance of target or minIndex
  {
    mid = Math.floor((left + right)/2)//finding the mid
    if(arr[mid] === target){//if target is found 
      minIndex = Math.min(mid, minIndex) //storing the smallest of all the target's indexes
      right = mid - 1  //shifting to left of mid to search target, as left has more minimal indexes  
    }
    if(target < arr[mid])//If yes, shift the searching area to right of mid
    {
      right = mid - 1 
    }
    if(target > arr[mid]){//If yes, shift the searching area to left of mid
      left = mid + 1
    }
  }

  return minIndex==9999999 ? undefined : arr[minIndex-1] //if minIndex was not changed then we did not found the element, thus returning undefined else we return the element just before the first appearance of target
}
