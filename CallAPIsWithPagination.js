// fetchList is provided for you
// const fetchList = (since?: number) => 
//   Promise<{items: Array<{id: number}>}>

// you can change this to generator function if you want
const fetchListWithAmount = async (amount = 5) => {
   let lastId = 0 //this variable will track the last id of array that was fetched from api call
   let ans = [] //will contain the final ans array
   while(true)
   {
    let list = await fetchList(lastId) //calling the api, on first call lastId would be 0 and in subsequent calls it will be the updated lastId
    if(list.items.length==0)break //if the response list had no items then we have reached the end and we need to stop 
    ans.push(...list.items) //storing all the items from the returned list into our ans array
    if(ans.length>=amount)break //if our ans array is already filled with the "amount" no. of items, then we are done and need to break
    lastId = list.items[list.items.length-1].id //storing the last id from response array, that would be used to fetch the next set of list, in the next iteration
   }
   return ans.slice(0,amount) //in some cases we might have more than "amount" no. of items thus just returning the first "amount" items
}
