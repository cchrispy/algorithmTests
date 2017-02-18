// A prefix of a string S is any substring of S that begins with the first letter of S.
// For example 'a', 'ab', 'abc', 'abcd' are prefixes of 'abcd'.

// The product of prefix P is the length of P multiplied by the number of occuranges of P in S.
// For example, the string 'abababa' has 7 prefixes:
//    "a", whose product equals 1 * 4 = 4,
//    "ab", whose product equals 2 * 3 = 6,
//    "aba", whose product equals 3 * 3 = 9,
//    "abab", whose product equals 4 * 2 = 8,
//    "ababa", whose product equals 5 * 2 = 10,
//    "ababab", whose product equals 6 * 1 = 6,
//    "abababa", whose product equals 7 * 1 = 7

// Write a function that will return the maximal product of any prefix of a given string
//    prefixMaxProduct('abababa') === 10
//        prefixMaxProduct('aaa') === 4
// O(n) time and space complexity

var prefixMaxProduct = str => {

  for (var i = 0; i < str.length; i++) {
    var len = i + 1;
    
  }

}

export default prefixMaxProduct;