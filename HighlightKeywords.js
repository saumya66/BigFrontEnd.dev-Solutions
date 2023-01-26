function addEm(updatedHtml, word, firstEmIndex, lastEmIndex){ //this adds the <em> & </em> tag at the passed indexes around the word
  let firstEm = "<em>"
  let lastEm= "</em>"
  let final = ""
  let firstPart = updatedHtml.substring(0,firstEmIndex+1)//stores the part of string before the current word
  final = final+firstPart+firstEm+word//concatenates first part with the <em> tag and the current word in this order 
  let lastPart = updatedHtml.substring(lastEmIndex)//stores the part of string after the current word
  final = final + lastEm + lastPart//concatenates the </em> tag with the last part in this order
  return final// and we have the updated string!
}

function removeAdjacentEms(updatedHtml){//this functions help remove this </em><em>  
  let toBeRemovedEms = "</em><em>"
  while(updatedHtml.indexOf(toBeRemovedEms)!=-1){//looping until we have no "</em><em>" left
    let startIndex = updatedHtml.indexOf(toBeRemovedEms); //find the first index of "</em><em>"
    let endIndex = startIndex + toBeRemovedEms.length - 1 //find the last index of "</em><em>"
    updatedHtml = updatedHtml.substring(0,startIndex) + updatedHtml.substring(endIndex+1) //stores the part before and after the "</em><em>" 
  }
  return updatedHtml 
}

//start reading here 👇
function highlightKeywords(html, keywords) {
  keywords.sort(((a, b) => b.length - a.length)) //sorting the keywords array by length from descending to ascending, to first wrap the longest word with em, to avoid overlapping conflicts
  let updatedHtml = html
  for(word of keywords){
    let starts = updatedHtml.indexOf(word)//finding the first index of current word
    if(starts == -1)continue //if the word does not exist move on to the next word
    let ends = starts+word.length-1 //finding the last index of current word
    //the below "if" is to handle the cases - such as when two words are already wrapped together with <em> & </em> 
    //and one of the two words is again present in keywords array to be wrapped.
    //But as it is alredy wrapped we shouldn't wrap it right, so we detect that here be checking 
    //if before the current word we have <em> or after the current word we have </em>
    //if we find such cases that means it is already wrapped with some other word thus we need to just continue to next iteration 
    if(starts>3 && updatedHtml.substring(starts-4,starts)=='<em>' || ends<=updatedHtml.length-1-5 && updatedHtml.substring(ends+1,ends+5)=='</em>')
      continue
    updatedHtml = addEm(updatedHtml, word, starts-1, ends+1)//this adds the <em> & </em> tag at the passed indexes 
  }
  let final = removeAdjacentEms(updatedHtml)//this function removes "</em><em>"" and this happens when a two parts of a single word are wrapped individually with <em></em>. ex - <em>Front</em><em>End</em>
  return final
}
