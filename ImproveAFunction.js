//Meaning of this function is to filter out or exclude all the objects in items array where the object has a property (same as any excludes array's k ) equal to a value (same as the k's repective v)
function excludeItems(items, excludes) {
  let excludeObj= {color : [] , type : [], age : []}; //maintaining a map to know what value of each of the 3 properties to remove from the items array

  let ans = []
  for(let ob of excludes){
    if(ob.k == "color"){
      excludeObj.color.push(ob.v);
    }
    else if(ob.k == "type"){
      excludeObj.type.push(ob.v);
    }
    else if(ob.k == "age"){
      excludeObj.age.push(ob.v);
    }
  }
  for(let item of items)//just going to go through each object in
  // items array and if the value of any of it's 3 properties match with any of the value of 
  //the same property in the new object that we formed above then we 
  //will just skip it, else if nothing matches we just put it in the ans array
  {
    if(excludeObj.color.length){ //checking if the color has some values
      let flag = true;
      for(let col of excludeObj.color) //checking if the color in of obj is same as color in the current item, if so we skip it or exclude it
      {
        if(col == item.color){
          flag = false;
          break
        }
      }
      if(flag == false)continue 
    }
     if(excludeObj.type.length){
      let flag = true;
      for(let type of excludeObj.type)
      {
        if(type == item.type){
          flag = false;
          break
        }
      }
      if(flag == false)continue 
    }
     if(excludeObj.age.length){
      let flag = true;
      for(let age of obj.age)
      {
        if(type == item.age){
          flag = false;
          break
        }
      }
      if(flag == false)continue 
    }
    ans.push(item)
  }
  return ans
}
