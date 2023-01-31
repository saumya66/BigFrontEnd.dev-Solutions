function add(num1, num2) {
  let num1Index = num1.length - 1 //storing last index of num1
  let num2Index = num2.length - 1 //storing last index of num2
  let sumArr = [], carry = 0 
  while(num1Index>=0 || num2Index>=0 || carry ) //until we have some index of num1 or num2 left or 'carry' left we will continue iterating as our sum is not over yet
  {
    let curNoAtNum1 = num1Index>=0 ? num1[num1Index] : 0 //if index of num1 is left then we use the no. in that index or 0
    let curNoAtNum2 = num2Index>=0 ? num2[num2Index] : 0 //if index of num2 is left then we use the no. in that index or 0
    let sum = Number(curNoAtNum1) + Number(curNoAtNum2) + carry //add the current numbers we are on in num1 and num2 and also carry
    carry = Math.floor(sum / 10)  //dividing by 10 gives us the carry, for ex- 18/10 = 1, 1 is the carry
    let x = sum % 10 //module by 10 gives us the no. to add in array or in the sum ans, for ex in 9+9:  18%10 = 8, 8 stays in sum string
    sumArr.push(x) //pushing x into sum array
    --num1Index //going 1 index back to process the next no in num1 
    --num2Index //going 1 index back to process the next no in num2
  }
  return sumArr.reverse().join('') //reversing the sum array as we have stored sum by iterating from the back, and then we concatenate all numbers in array using join()  & return!
}
 
