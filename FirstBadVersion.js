

// This is a JavaScript coding problem from BFE.dev 

/*
 type IsBad = (version: number) => boolean
 */

/**
 * @param {IsBad} isBad 
 */
function firstBadVersion(isBad) {
  return (version) => {
    //yup the q is bit confusing, but basically the question wants the lowest version that is bad within the range of 1 to queried version
    //just binary search!
    low = 1;
    high = version;
    mid = 0;
    while(low<=high)
    {
      mid =Math.floor((low + high)/2);
      if(isBad(mid)){
        high = mid-1;
      } 
      else {
        low = mid+1;
      }
        console.log(low)
    }
    if(isBad(mid) &&  mid <= version)return mid;
    else return -1;
  }
}
firstBadVersion((i) => i >= 1)(1)

 


