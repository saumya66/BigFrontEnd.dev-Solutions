function stringify(data) {
  if(typeof data === 'bigint') {
    throw new Error('Do not know how to serialize a BigInt at JSON.stringify');
  } 
  if(typeof data === 'string') {
    return `"${data}"`;
  } 
  if(typeof data === 'function') {
    return undefined;
  }
  if(data !== data) {
    return "null";
  }
  if(data === Infinity) {
    return "null";
  }
  if(data === -Infinity) {
    return "null";
  }
  if(typeof data === 'number') {
   return `${data}`;
  }
  if(typeof data === 'boolean') {
    return `${data}`;
  }
  if(data === null) {
    return "null";
  }
  if(data === undefined) {
    return 'null';
  }
  if(typeof data === 'symbol') {
    return 'null';
  }
  if(data instanceof Date) {
    return `"${data.toISOString()}"`;
  }
  if(Array.isArray(data)) {
    let dd = data.map((d)=> stringify(d) )
    let a = `[${dd.join(',')}]`
    return a
  }
  if(typeof data == 'object')
  {
    let arr  =  Object.entries(data).reduce((ar, [key, value])=>{
      if(value === undefined)
        return ar
      ar.push(`"${key}":${stringify(value)}`)//recursion to find the string form of nested object
      return ar
    },[])
    let ans = `{${arr.join(',')}}`//using join to add commas between strings of the object entries
    return ans  
  }
}
