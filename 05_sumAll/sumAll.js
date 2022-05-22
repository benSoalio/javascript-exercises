const sumAll = function (num1, num2) {
  let sum = 0;
  // Ensure that the args are within the conditions define
  if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 != "number" ||
    typeof num2 != "number"
  ) {
    //return ERROR
    return "ERROR";
  }

  //determine the greater value between num1 and num2
  if (num1 <= num2) {
    for (let i = num1; i <= num2; i++) {
      sum += i;
    }
  } else {
    for (let i = num2; i <= num1; i++) {
      sum += i;
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
