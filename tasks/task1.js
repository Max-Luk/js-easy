
function replaceVowels(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (vowels.includes(char.toLowerCase())) {
      result += '*';
    } else {
      result += char;
    }
  }

  return result;
}

console.log(replaceVowels("hello world")); 
console.log(replaceVowels("Javascript"));

module.exports = replaceVowels;