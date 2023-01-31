/**
 * @param {HTMLElement | null} tree
 * @return {number}
 */
function getHeight(tree) {
  let maxHt = 0  //starting value of height is 0 
  if(!tree)return maxHt //if our tree is null then we just return the height 
  for(let child of tree.children) //iterating through the children of each child
  {
    maxHt = Math.max(maxHt, getHeight(child))//recursing deeper into the child
  }
  return maxHt + 1//at the end of each loop our height increments by 1 and we just got done iterating 1 level deep
}
