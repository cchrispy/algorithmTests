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

  it('"removeWord" method should leave prefixes intact if other words branch from it', () => {
    var trie = new Trie();

    trie.addWord('programmatic');
    trie.addWord('programmer');
    trie.addWord('progress');
    trie.addWord('programming');
    trie.addWord('programs');
    trie.addWord('professional');

    trie.removeWord('programmer');
    trie.removeWord('programs');
    trie.removeWord('progress');

    expect(trie.isMember('programmer')).to.be.false;
    expect(trie.isMember('programs')).to.be.false;
    expect(trie.isMember('progress')).to.be.false;

    expect(trie.isMember('programmatic')).to.be.true;
    expect(trie.isMember('programming')).to.be.true;
    expect(trie.isMember('professional')).to.be.true;

  })

  it('"isMember" method should work for new words and deleted words and no words', () => {
    var trie = new Trie();

    expect(trie.isMember('h')).to.be.false;

    trie.addWord('hello');

    expect(trie.isMember('h')).to.be.true;
    expect(trie.isMember('hel')).to.be.true;
    expect(trie.isMember('hello')).to.be.true;
    expect(trie.isMember('helo')).to.be.false;
    expect(trie.isMember('helloo')).to.be.false;

    trie.removeWord('hello');

    expect(trie.isMember('hello')).to.be.false;
    expect(trie.isMember('h')).to.be.false;
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