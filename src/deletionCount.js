// Given two strings, return the total number of letter deletions required so that the remaining words are the same
// EXAMPLE
// "cat", "at" returns 1
// "cat", "bat" returns 2
// "boat", "goat" returns 3
// "aaaaa", "a" returns 4
// "thought", "sloughs" returns 6
// "abc", "cba" returns 4

var deletionCount = (str1, str2) => {

  var longer = str1.length >= str2.length ? str1 : str2;
  var shorter = longer === str1 ? str2 : str1;
  var answer = '';
  
  for (var j = 0; j < longer.length; j++) {
    var text = '';
    var lastIndex = -1;
    for (var i = j; i < longer.length; i++) {
      var letter = longer[i];
      var index = shorter.indexOf(letter);
      if (index > lastIndex) {
        text += letter;
        lastIndex = index;
      }
    }
    answer = text.length > answer.length ? text : answer;
  }
  return str1.length + str2.length - answer.length - answer.length;
}


export default deletionCount;