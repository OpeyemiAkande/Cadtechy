class Calculator {
  addition = (a, b) => {
    return a + b;
  };

  subtraction = (a, b) => {
    return a - b;
  };

  multiplication = (a, b) => {
    return a * b;
  };

  division = (a, b) => {
    try {
      if (b !== 0) return a / b;
    } catch (error) {
      console.log(error, "Can't divide by 0");
    }
  };
}

const myCalculator = new Calculator();
console.log(myCalculator.multiplication(2, 3));
console.log(myCalculator.addition(2, 3));
console.log(myCalculator.subtraction(2, 3));
console.log(myCalculator.division(2, 0));
