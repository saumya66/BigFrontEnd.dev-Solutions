function flat(arr, depth = 1) {
  let fullFlattend = true;
  if(depth == Infinity){
    for(let a of arr){
      if(typeof a == "object"){
        fullFlattend= false;
        break;
      }
    }
  }
  if(depth==0 || (depth==Infinity && fullFlattend)){
    return arr;
  }
  else{
    let narr = []
    for(let a of arr){
      if(typeof a == "object"){
        for(let b of a){
          narr.push(b);
        }
      }
      else narr.push(a);
    }
    return flat(narr, --depth);
  }
}
