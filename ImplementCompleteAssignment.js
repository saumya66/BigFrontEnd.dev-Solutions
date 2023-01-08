function completeAssign(target, ...sources) {
  if(target==null || target==undefined)throw new Error()
  target = Object(target)
  for(let source of sources)
  {
    if(source ==null || source==undefined)continue
    Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
  }
  return target
}
