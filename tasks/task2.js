
function reverseWithoutNumbers(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i];
    

    if (!(char >= '0' && char <= '9')) {
      result += char;
    }
  }
  return result;
}

console.log(reverseWithoutNumbers("hello123world456")); 
console.log(reverseWithoutNumbers("abc123xyz")); 

module.exports = reverseWithoutNumbers;