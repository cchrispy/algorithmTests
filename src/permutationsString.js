/*
** Given a string of unique characters, write a method to compute all
** unique permutations of the string.
** EXTRA: The input string may have duplicate characters. Return all unique permutations.
**
** EXAMPLE
** Input: 'abc'
** Output: 'abc', 'acb', 'bac', 'bca', 'cab', 'cba'
*/

const permutationsString = (str, res = []) => {
  
  if (!str.length) { // if the string is empty, return the results
    return res;
  }
  if (!res.length) { // if the results is empty, add the first letter in
    res.push(str[0]);
  } else {

    let letter = str[0]; // grab the next letter
    let copy = res.slice(); // make a copy of the results
    res = []; // reset the results array

    // iterate through each existing permutation
    copy.forEach(perm => {
      // for each permutation, create another string by adding the new letter
      // to every index of the existing string, thus generating a brand new
      // permutation with the new letter added in
      for (let i = 0; i <= perm.length; i++) {
        var newString = perm.slice(0, i) + letter + perm.slice(i);
        res.push(newString);
      }
    })
  }
  // recurse until all letters of the original string is used up, then return the result
  return permutationsString(str.slice(1), res);
}

export default permutationsString;