//Reading up on these will help how this works : 
//getOwnPropertyDescriptors: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
//getOwnPropertySymbols: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols
function objectAssign(target, ...sources) {
  if(target === null || target === undefined)throw new Error()
  target= Object(target)
  for(const s of sources){
    if(s===null || s===undefined)continue
    Object.defineProperties(target, Object.getOwnPropertyDescriptors(s))
  }
  return target
}
