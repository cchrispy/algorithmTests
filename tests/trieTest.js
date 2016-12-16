import { expect } from 'chai';
import Trie from '../src/trie';

describe('Trie (prefix tree)', () => {

  var newTrie = new Trie();

  it('Should be a class', () => {
    expect(newTrie).to.be.an.instanceof(Trie);
  });

  it('Supports "addWord", "removeWord", "isMember" methods', () => {
    expect(newTrie.addWord).to.be.a('function');
    expect(newTrie.removeWord).to.be.a('function');
    expect(newTrie.isMember).to.be.a('function');
  });

  it('"isMember" method should return a boolean', () => {
    expect(newTrie.isMember()).to.be.a('boolean');
  });

});