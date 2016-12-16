// Implement a trie (aka "prefix tree") data structure

class Trie {
  construtor() {
    this.val = '';
    this.children = [];
  }

  addWord(string) {
    // Iterate through the letters and check if they exist in the trie
    // Add new letters to the existing prefix as new nodes

  }

  removeWord(string) {
    // Go through the trie until you hit a non-branching node
    // Delete that to remove the word
    // Ensure that you do not delete prefixes that extend to other words

  }

  isMember(string) {
    // Verify if the word exists in the trie
    // Iterate through the letters and trace it in the trie
    return false;
  }

  predict(prefix) {
    // Iterate to the last letter/node
    // Record all complete branches of the node (down to the leaves)
    var predictions = [];

    return predictions;
  }

}

class Node {
  constructor(val) {
    // Each node holds one letter
    this.val = val;
    this.children = [];
  }
}

export default Trie;