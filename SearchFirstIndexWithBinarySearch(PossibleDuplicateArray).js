function firstIndex(arr, target){
  let left = 0, right = arr.length-1 , mid=0;
  let minIndex = 9999999;
  while(left<=right)
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
  return minIndex==9999999 ? -1 : minIndex //if minIndex was not changed then we did not found the element, thus returning -1 else we return the minIndex
}
