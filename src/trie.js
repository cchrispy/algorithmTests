// Implement a trie (aka "prefix tree") data structure
// Optimize for space as much as possible

class Trie {
  constructor() {
    this.val = '';
    this.branches = 0;
    this.children = {};
  }

  addWord(string) {
    // Iterate through the letters and check if they exist in the trie
    // Add new letters to the existing prefix as new nodes

    var currentNode = this;

    for (var i = 0; i < string.length; i++) {

      var letter = string[i];

      if (!currentNode.children[letter]) {
        var node = new Node(letter);
        currentNode.children[letter] = node;
        currentNode.branches++;
        currentNode = node;
      } else {
        currentNode = currentNode.children[letter];
      }
    }
    return true;
  }

  removeWord(string) {
    // Go through the trie until you hit a non-branching node
      // Non-branching would mean there is only one child letter
    // Delete that to remove the word
    // Ensure that you do not delete prefixes that extend to other words
    // If the input string is a substring of an existing word, don't delete it

    if (!this.isMember(string)) { return false; }

    var mostRecentBranch = [this, string[0]];
    var currentNode = this;

    for (var i = 0; i < string.length; i++) {

      var letter = string[i];

      if (currentNode.branches > 1) {
        mostRecentBranch = [currentNode, letter];
      }
      currentNode = currentNode.children[letter];
    }

    if (currentNode.branches) {
      // if the input string does not end on a leaf in the tree (it's not a complete word)
      // use removePrefix instead to remove all words with a given prefix
      return false;
    }

    delete mostRecentBranch[0].children[mostRecentBranch[1]];
    mostRecentBranch[0].branches--;

    return string;

  }

  isMember(string) {
    // Verify if the word exists in the trie
    // Iterate through the letters and trace it in the trie

    if (typeof string !== 'string') { return false; }

    var currentNode = this;

    for (var i = 0; i < string.length; i++) {

      var letter = string[i];

      if (!currentNode.children[letter]) {
        return false;
      } else {
        currentNode = currentNode.children[letter];
      }
    }
    return true;
  }

  predict(prefix = '') {
    // Iterate to the last letter/node
    // Record all complete branches of the node (down to the leaves)

    if (!this.isMember(prefix)) { return false; }

    var predictions = [];

    var currentNode = this;

    for (var i = 0; i < prefix.length; i++) {
      currentNode = currentNode.children[prefix[i]];
    }

    this._gatherWords(currentNode, prefix.slice(0, prefix.length - 1), predictions, this);

    return predictions;
  }

  removePrefix(prefix) { // TODO
    // Remove all words with a given prefix, including the prefix itself

    if (!this.isMember(prefix) || !prefix.length) { return false; }

    var deletedWords = this.predict(prefix);

    var currentNode = this;

    for (var i = 0; i < prefix.length; i++) {

      var letter = prefix[i];

      if (i === prefix.length - 1) {
        delete currentNode.children[letter];
        currentNode.branches--;
      } else {
        currentNode = currentNode.children[letter];
      }

    }

    return deletedWords;
  }

  _gatherWords(node, string, res = [], context = this) {

    var word = string + node.val;

    if (!node.branches) {
      res.push(word);
    } else {
      for (var prop in node.children) {
        context._gatherWords(node.children[prop], word, res, context);
      }
    }

  }

}

class Node {
  constructor(val) {
    // Each node holds one letter
    // The children will be an object that holds references to other nodes
    this.val = val;
    this.branches = 0;
    this.children = {};
  }
}

export default Trie;