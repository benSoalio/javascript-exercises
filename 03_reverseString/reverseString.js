const reverseString = function (text) {
  let textReverse = "";
  //loop through the string
  for (let i = text.length - 1; i > -1; i--) {
    // add to the reverse string from the last character to the first
    textReverse += text[i];
  }

  return textReverse;
};

// Do not edit below this line
module.exports = reverseString;
