const palindromes = function (text) {
    // 1. all lowercase
    let lowerText = text.toLowerCase();
    // 2. string to array
    const array = lowerText.split("");
    //console.log(array);

    // 3. Create new array that only contains letters
    let onlyLettersArray = [];
    for(let i=0; i < array.length; i++) {
        if(array[i] === " " || array[i] === "," || array[i] === "." || array[i] === "!") {
            continue;
        }
        onlyLettersArray.push(array[i]);
    };

   // 4. loop through array items from start (forEach) and from the end (while),
   //    if is a palindrome, letters are always be the same
   let isPalindrome = true;
   let index = onlyLettersArray.length-1;
   onlyLettersArray.forEach(item => {
       while(true) {
           if(item != onlyLettersArray[index]) {
               isPalindrome = false;              
           }
           index--;
           break;
       }
  })
  return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
