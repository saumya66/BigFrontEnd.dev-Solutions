function selectionSort(arr) {
  for(let i = 0;i<arr.length;i++)
  {
    let min = arr[i]; //assuming the i'th index as min
    let minIndex  = i //storing it's index
    for(let j = i+1;j<arr.length;j++) //iterating through all the elements to the right of i'th element and finding the smallest element's index & storing it in minIndex
    {
      if(arr[j]<min){ //finds the smallest element
        min = arr[j]
        minIndex = j //storing the smallest element's index
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]] //swapping the element at i'th index with the smallest element (at minIndex) found in the above loop
  }
  return arr
}
