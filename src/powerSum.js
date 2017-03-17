/*
** Given two integers x and n, find the number of ways that x can be expressed
** as the sum of the nth power of unique natural numbers. Where n > 1.
**
** EXAMPLE
** powerSum(10, 2) === 1
** // the number of ways 10 can be represented as the sum of squared unique numbers
** // 10 = 1^2 + 3^2
**
** powerSum(100, 2) === 3
** // 100 = 10^2 = 6^2 + 8^2 = 1^2 + 3^2 + 4^2 + 5^2 + 7^2
**
** powerSum(100, 3) === 1
** // 100 = 1^3 + 2^3 + 3^3 + 4^3
*/

var powerSum = (x, n) => { // not working
  let limit = Math.floor(Math.pow(x, 1/n));
  let start = x;
  let count = 0;

  for (let i = limit; i >= 1; i--) {

    if (start - Math.pow(i, n) === 0) {
      // console.log(x, i);
      count++;
    } else {
      count += powerSum(x - Math.pow(i, n), n);
    }

  }

  return count;
}

export default powerSum;