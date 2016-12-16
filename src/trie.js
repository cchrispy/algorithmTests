// Implement a trie (aka "prefix tree") data structure

class Trie {
  construtor() {
    this.val = '';
    this.children = [];
  }

  addWord(string) {

  }

  removeWord(string) {

  }

  isMember(string) {
    return false;
  }

  predict(prefix) {
    var predictions = [];

    return predictions;
  }

}

class Node {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
}

export default Trie;