//Here if you console log or print sum(1)(2) you will get a function 
//instead of what one would normally guess i.e 3. That's because it is 
//not possible to return a value as we don't know when is the last 
//call going to be.

//That's why this question asks that when one calls sum(1)(2) it should 
//not return 3 rather it should be equal to 3. 
//(confusing right ? dont worry read a bit more...)

//Functions are objects in javascript and when we compare a function
//to a number, to do it JS takes the value present in 'valueOf' of the 
// function/object, thus here we just manipulate that, so that when we compare
//the number present in valueOf is equal to the required sum!

//hope u got it!

function sum(num) {
  let v = function(x)
  {
    return sum(x + num)
  }
  console.log(num)
  v.valueOf = () => num
  return v
}
