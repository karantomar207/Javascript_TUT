function getLongestWord(str){
    let words = str.split(' ');
    let maxLength = 0;
    let longestWord = '';
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
        longestWord = words[i];
      }
    }
    console.log(longestWord);
  
  }
  let a=prompt('Enter a String')
  getLongestWord(a);