function sort(items, newOrder) {
  // reorder items inline
  let len = items.length;
  let map = new Map();
  for(let i=0;i<len;i++) {
   map.set(newOrder.indexOf(i), items[newOrder.indexOf(i)]);
  }
  const res = [...map.values()];
  for(let i=0;i<res.length;i++)
    items[i] = res[i]
}
