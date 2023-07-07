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
    try {
      num1 / num2;
    } catch (err) {
      console.log("You can't divide by 0");
    }

    // return quotient;
  };
}

const myCalculator = new Calculator();
console.log(myCalculator.multiplication(2, 3));
console.log(myCalculator.addition(2, 3));
console.log(myCalculator.subtraction(2, 3));
console.log(myCalculator.division(2, 0));
