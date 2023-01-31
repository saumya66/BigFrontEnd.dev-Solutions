let mp = new Map()

function cloneDeep(data) {
  if(data === null)return null 
  else if(typeof data == 'undefined')return undefined
  else if(data && typeof data === 'object'){ //if object, recursing and making a new object
    let obj = Array.isArray(data) ? [] : {}
    let keys = [...Object.getOwnPropertyNames(data), ...Object.getOwnPropertySymbols(data)] //getting all keys, getOwnPropertySymbols() helps us get any symbol() type of keys 
  
    if(mp.has(data)){console.log("yo",data, mp.get(data));return mp.get(data)} //map helps us remember the circular objects & helps us avoid stack overflows
    else{ console.log("setting",data, obj);mp.set(data, obj)} //can't understand - if we are always setting {} or [] how is [1,2] being returned for mp.get at one point

    for(let key of keys){
      obj[key] = cloneDeep(data[key])  
    }

    return obj
  }
  else return data //any other data type, we just return the data
}
