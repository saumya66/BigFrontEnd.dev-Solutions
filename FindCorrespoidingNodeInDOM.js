const findCorrespondingNode = (rootA, rootB, target) => {
   if(rootA === target) { //when rootA becomes target we just it corresponding rootB element
    return rootB;
  }
  for (let i = 0; i < rootA.children.length; i++) {
    const foundNode = findCorrespondingNode(rootA.children[i], rootB.children[i], target);
    if(foundNode) return foundNode;
  }
}
