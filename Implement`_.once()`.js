function once(func) {
  let firstAns = "nothing";//storing first ans as "nothing" till we call our function for the first time
  return function(...args){
    if(firstAns==="nothing")firstAns = func.call(this,...args) //if it's the first call or firstAns = "nothing" then call the function(func) with appropriate arguments & store the ans in firstReturn
    return firstAns //everytime we only return the answer that was stored the first time
  }
}
