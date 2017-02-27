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
  
  if (!str.length) {
    return res;
  }
  if (!res.length) {
    res.push(str[0]);
  } else {
    let letter = str[0];
    let copy = res.slice();
    res = [];
    copy.forEach(perm => {
      for (let i = 0; i <= perm.length; i++) {
        var newString = perm.slice(0, i) + letter + perm.slice(i);
        res.push(newString);
      }
    })
  }
  return permutationsString(str.slice(1), res);
}

export default permutationsString;