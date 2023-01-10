//Refer to this link to understand the working clearly : https://www.programiz.com/dsa/merge-sort

//this function sorts and merges 2 arrays
function merge(arr, left, mid, right){
  let leftArr = [], rightArr = [], finalArr=[]

  //2 below loops used to store the 2 arrays that would be sorted and merged 
  for(let i = left;i<=mid;i++)
  {
    leftArr.push(arr[i])
  }
  for(let i = mid+1;i<=right;i++)
  {
    rightArr.push(arr[i])
  }

  let i=0,j=0
  //iterating, comparing and storing in ascending order
  while(i<leftArr.length && j<rightArr.length)
  {
    if(leftArr[i]<rightArr[j]){
      finalArr.push(leftArr[i])
      ++i;
    }
    else if(leftArr[i]>rightArr[j])
    {
      finalArr.push(rightArr[j])
      ++j;
    }
    else {
       finalArr.push(rightArr[j])
       finalArr.push(leftArr[i])
       ++i;
       ++j;
    }
  }
  //the purpose of next 2 loops is to push all the remaining elements into the merged array, if any present in one of the 2 arrays 
  while(i<leftArr.length)
  {
    finalArr.push(leftArr[i])
    ++i;
  }
  while(j<rightArr.length)
  {
    finalArr.push(rightArr[j])
    ++j;
  }

  //in this loop we are just updating our original array with the values in the our final merged array!
  for(let i = 0;i<=finalArr.length-1;i++)
  {
    arr[i+left] = finalArr[i]
  }
}

function mergesort(arr, left, right)
{
  let mid
  if(left >= right)
    return 
  else {
    mid = Math.floor((left+right)/2)
  }

  mergesort(arr, left, mid)//left of mid recursion
  mergesort(arr, mid+1, right)//right of mid recursion
  merge(arr, left, mid, right)//merging the above 2 parts
}
function mergeSort(arr) {
  mergesort(arr,0,arr.length-1)
}
