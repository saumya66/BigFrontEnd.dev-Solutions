//The thing about setTimeout or setInterval is everytime you create one they return the highest id for ex :
//if you already have 3 setTimeouts and you declare another one it will return you 4

//Thus using that we can just iterate from 1 to 4 or highest id and clear each timeout by using window.clearTimeout(id)

function clearAllTimeout() {
  let highestId = window.setTimeout(()=>'a',0)
  for(let i = 1;i<=highestId;i++)
  {
    window.clearTimeout(i)
  }
}
