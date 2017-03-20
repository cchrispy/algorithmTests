// Say what you see
// Transform a string of digits based on its spoken description
// EXAMPLE:
// 21 -> 'one two, one one' -> 1211
// 12 -> 'one one, one two' -> 1112
// Given an array of strings (digit based), return an array of strings (description based)
// sayWhatYouSee(['12', '21', '1113']) // -> ['1112', '1211', '3113']

var sayWhatYouSee = arr => {
  var res = [];
  arr.forEach(str => {
    var ans = '';
    var i = 0;
    var cur = str[0];
    var count = 1;
    while (i < str.length) {
      if (str[i + 1] === cur) {
        count++;
      } else {
        ans += String(count) + cur;
        cur = str[i + 1];
        count = 1;
      }
      i++;
    }
    res.push(ans);
  })
  return res;
}

export default sayWhatYouSee;