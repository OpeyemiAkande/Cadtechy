class Calculator {
  addition = (num1, num2) => {
    return num1 + num2;
  };

  subtraction = (num1, num2) => {
    return num1 - num2;
  };

  multiplication = (num1, num2) => {
    return num1 * num2;
  };

  division = (num1, num2) => {
    if (num2 === 0) {
      console.log("Can't divide by 0");
      return;
    } else {
      return num1 / num2;
    }
  };
}

const myCalculator = new Calculator();
console.log(myCalculator.multiplication(2, 3));
console.log(myCalculator.addition(2, 3));
console.log(myCalculator.subtraction(2, 3));
console.log(myCalculator.division(2, 0));
