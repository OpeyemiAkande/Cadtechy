function countEvenNumbers(start, end) {
  //   if (start === 0) return parseInt((end - start) / 2);
  //   else if (end % 2 === 1) return parseInt((end - start) / 2);
  //   else return 1 + parseInt((end - start) / 2);

  let counter = 0;

  for (start; start <= end; start++) {
    if (start % 2 === 0) counter++;
  }

  return counter;
}

console.log(countEvenNumbers(1, 12));
console.log(countEvenNumbers(5, 12));
console.log(countEvenNumbers(1, 3));
console.log(countEvenNumbers(10, 16));
