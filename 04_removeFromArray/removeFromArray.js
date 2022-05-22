const removeFromArray = function (inputArray, ...theArgs) {
  //for each elements of theArgs
  for (const arg of theArgs) {
    // compare it to the elements of input array
    for (let i = 0; i < inputArray.length; i++) {
      // if arr[i] === arg update the value of the new array
      if (arg === inputArray[i]) {
        //remove element ot index i from the array
        inputArray.splice(i, 1);
      }
    }
  }
  return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
