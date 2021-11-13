let prevNumber = "";
let calcuationOperator = "";
let currentNumber = "0";

const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const numbers = document.querySelectorAll(".number");

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

const inputOperator = (operator) => {
  prevNumber = currentNumber;
  calcuationOperator = operator;
  currentNumber = "";

  //   salah
  //   if (calculationOperator === "") {
  //     prevNumber = currentNumber;
  //   }
  //   calculationOperator = operator;
  //   currentNumber = "0";
};

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

const calculate = () => {
  let result = "";
  switch (calcuationOperator) {
    //   hanya satu yang di kasib parseFloat
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = prevNumber - currentNumber;
      break;
    case "*":
      result = prevNumber * currentNumber;
      break;
    case "/":
      result = prevNumber / currentNumber;
      break;
    default:
      return;

    // SALAH

    // case "+":
    //   result = parseFloat(prevNumber) + parseFloat(currentNumber);
    //   break;
    // case "-":
    //   result = parseFloat(prevNumber) - parseFloat(currentNumber);
    //   break;
    // case "*":
    //   result = parseFloat(prevNumber) * parseFloat(currentNumber);
    //   break;
    // case "/":
    //   result = parseFloat(prevNumber) / parseFloat(currentNumber);
    //   break;
    // default:
    //   break;
  }
  currentNumber = result;
  calcuationOperator = "";
};

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

const allClear = document.querySelector(".all-clear");

allClear.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }

  currentNumber += dot;
};

const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

inputPercentage = (percentage) => {
  if (currentNumber.includes("%")) {
    return;
  }
  currentNumber = currentNumber / 100;
};

const percentage = document.querySelector(".percentage");
percentage.addEventListener("click", (event) => {
  inputPercentage(event.target.value);
  updateScreen(currentNumber);
});
