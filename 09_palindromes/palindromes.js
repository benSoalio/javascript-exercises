const palindromes = function (word) {
  const punctuations = [".", "?", "!", ",", ":", ";", "-", " "];
  //Lower case all the character of the word
  word = word.toLowerCase();
  // transform word in an array of char
  let chars = word.split("");
  // console.log(chars);
  // Delete all the punctuations and space in the array
  chars = chars.filter((char) => {
    return char !== " " && char !== "!" && char !== "." && char !== ",";
  });
  //reset char array to a string
  word = chars.join("");
  console.log(word);
  // reverse the array char and join it
  const reverseWord = chars.reverse().join("");
  console.log(reverseWord);
  // compare word and reverseWord
  if (word.localeCompare(reverseWord) === 0) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
