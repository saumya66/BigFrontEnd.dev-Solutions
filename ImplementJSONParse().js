function parse(str) {
    if(str === '') {
    throw Error();
  }
  if(str[0] === "'") {
    throw Error();
  }
  if(str === 'null') {
    return null;
  }
  if(str === '{}') {
    return {};
  }
  if(str === '[]') {
    return [];
  }
  if(str === 'true') {
    return true;
  }
  if(str === 'false') {
    return false;
  }
  if(str[0] === '"') {
    return str.slice(1, -1);
  }
  if(+str === +str) {
    return Number(str);
  }
  if(str[0]=='[')//incase of an array : - each element is splitted between ', - parsed & - made into a new arr which is returned 
  {
    let ans = str.substring(1,str.length-1).split(',').map((elem)=>parse(elem)) 
    return ans;
  }
  if(str[0]=='{')
  {
    let insideCurlyBrackets = str.substring(1,str.length-1)//storing the string present between curly brackets
    let obj = insideCurlyBrackets.split(',').reduce((newObj, elem)=>{//splitting the above string between commas to get each element
      let indexOfColon = elem.indexOf(':') //finding index of ':' to separate key & value  
      newObj[parse(elem.substring(0,indexOfColon))] = parse(elem.substring(indexOfColon+1))//parsing both key and value and appending it into the object by storing the key-value pair
      return newObj
    },{})

    return obj
  }
}
