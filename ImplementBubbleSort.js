function bubbleSort(arr) {
  for(let i = 0;i<arr.length-1 ;i++) //This loop handles no. of times we need to iterate through the whole array (n-1 max)
  {
    let isSwapped = false
    for(let j = 0;j<arr.length-1;j++) //going through the array
    {
      if(arr[j]>arr[j+1]) //if left>right we need to swap 
      {
        isSwapped = true;
        [arr[j], arr[j+1]]=[arr[j+1], arr[j]] //swapping
      }
    }
    if(!isSwapped){ //if in the above loop there were no swaps then we have sorted & we break to get out of the loops and return later
      break;
    }
  }
  return arr
}
