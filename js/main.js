function getCount(str) {
    var vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'] // the vowels
    for(let char of str){
      if(vowels.includes(char)){ //includes() method determines whether an array has certain value... in this case vowels
        vowelsCount++ //if the word has a vowel, we would want to increase our vowelCount variable
      }
    }
    // enter your majic here
    
    return vowelsCount;
  }