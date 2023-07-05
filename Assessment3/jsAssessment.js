"use strict";

// Task 1: Odd or Even

const checkOddOrEven = (num) => (num % 2 === 0 ? "Even" : "Odd");
console.log(checkOddOrEven(4));

// Task 2: Maximum of Three Numbers
const findMax = (num1, num2, num3) => {
  let max = 0;

  if (num1 > max) max = num1;

  if (num2 > max) max = num2;

  if (num3 > max) max = num3;

  return max;
};

console.log(findMax(52, 16, 2));

// Task 3: Grade Calculator

const calculateGrade = (score) => {
  if (score >= 90) return "A";
  else if (score >= 80 && score < 90) return "B";
  else if (score >= 70 && score < 80) return "C";
  else if (score >= 60 && score < 70) return "D";
  else return "C";
};
console.log(calculateGrade(89));
