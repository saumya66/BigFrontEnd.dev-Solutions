function binarySearch(arr, target){
  //Simple Binary search algorithm
  let left = 0, right = arr.length-1 , mid=0;
  while(left<=right)
  {
    mid = Math.floor((left + right)/2)//finding the mid
    if(arr[mid] === target){//if found just returning the index
      return mid
    }
    if(target < arr[mid])//If yes, shift the searching area to right of mid
    {
      right = mid - 1 
    }
    if(target > arr[mid]){//If yes, shift the searching area to left of mid
      left = mid + 1
    }
  }
  return -1 //if reached here, we did not find the target thus returning -1
}
