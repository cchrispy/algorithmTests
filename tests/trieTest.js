import { expect } from 'chai';
import Trie from '../src/trie';

describe('Trie (prefix tree)', () => {

  var sampleTrie = new Trie();

  it('Should be a class', () => {
    expect(sampleTrie).to.be.an.instanceof(Trie);
  });

  it('Supports "addWord", "removeWord", "isMember", "predict" methods', () => {
    expect(sampleTrie.addWord).to.be.a('function');
    expect(sampleTrie.removeWord).to.be.a('function');
    expect(sampleTrie.isMember).to.be.a('function');
  });

  it('"isMember" method should return a boolean', () => {
    expect(sampleTrie.isMember()).to.be.a('boolean');
  });

  it('"predict" method should return a list of predictions with the inputted prefix', () => {
    var trie = new Trie();
    trie.addWord('program');
    trie.addWord('programming');
    trie.addWord('poop');
    trie.addWord('programmer');
    trie.addWord('xprogram');
    trie.addWord('progamer');
    trie.addWord('profession');
    trie.addWord('prune');

    var predictions = trie.predict('pro');
    var expectedWords = [
                         'program', 
                         'programming', 
                         'programmer', 
                         'progamer', 
                         'profession'
                         ];
    expect(predictions).to.be.an('array');
    expect(predictions).to.have.lengthOf(5);
    expect(predictions).to.have.members(expectedWords);
  });


});