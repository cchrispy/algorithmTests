/*
** A string of length N (where N is evenly divisible by 4) 
** contains only the letters A, C, T, G. 
** This string is considered steady if each of the letters 
** occur exactly N/4 times. Find the length of the smallest 
** possible substring that needs to be replaced in order 
** to for the string to be steady. 
** If the string is already steady, return 0.
*/

var obj = { A: 0, C: 1, T: 2, G: 3 }

const steadyString = string => {

  var data = string.split('');
  var target = data.length / 4;
      
  var counts = count(data);
  if (check(counts, target)) { return 0 }
  
  var min = data.length;
  for (var i = 0; i < data.length; i++) {
      for (var j = i; j < data.length + 1; j++) {
          var copy = data.slice();
          copy.splice(i, j - i);
          if (check(count(copy), target)) {
              min = min < j - i ? min : j - i;
          }
      }
  }
  return min;
}

/******************************************
**** HELPER FUNCTIONS HELPER FUNCTIONS ****
******************************************/
function count(letters) {
  var counts = [0, 0, 0, 0];
  letters.forEach(letter => {
    if (letter) { counts[obj[letter]]++ }
  });
  return counts;
}

function check(counts, target) {
  return counts.every(x => x <= target);
}

export default steadyString