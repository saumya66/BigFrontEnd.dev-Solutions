function $(el) {
  return {
    css : function(propertyName, value){ 
      el.style[propertyName] = value; //applies style
      return this //this lets the chaining happen
    }
  }
}
