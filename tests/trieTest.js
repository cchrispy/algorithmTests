import { expect } from 'chai';
import Trie from '../src/trie';

describe('Trie (prefix tree)', () => {

  var sampleTrie = new Trie();

  var trie;
  beforeEach(() => {
    trie = new Trie();
  })

  it('Should be a class', () => {
    expect(sampleTrie).to.be.an.instanceof(Trie);
  });

  it('Supports "addWord", "removeWord", "isMember", "predict", "removePrefix" methods', () => {
    expect(sampleTrie.addWord).to.be.a('function');
    expect(sampleTrie.removeWord).to.be.a('function');
    expect(sampleTrie.isMember).to.be.a('function');
    expect(sampleTrie.predict).to.be.a('function');
    expect(sampleTrie.removePrefix).to.be.a('function');
  });

  it('"isMember" method should return a boolean', () => {
    expect(sampleTrie.isMember()).to.be.a('boolean');
    expect(sampleTrie.isMember('a')).to.be.a('boolean');
  });

  it('"isMember" method should return true for prefixes of added words, as well as full words', () => {

    trie.addWord('applesauce');
    trie.addWord('application');
    trie.addWord('nonsense');
    trie.addWord('ardenwood');

    expect(trie.isMember('apple')).to.be.true;
    expect(trie.isMember('application')).to.be.true;
    expect(trie.isMember('applesauce')).to.be.true;
    expect(trie.isMember('applesauces')).to.be.false;
    expect(trie.isMember('noob')).to.be.false;
    expect(trie.isMember()).to.be.false;

  });

  it('"removeWord" method should return false for invalid inputs', () => {

    trie.addWord('program');
    trie.addWord('progress');
    trie.addWord('prowess');

    expect(trie.removeWord()).to.be.false;
    expect(trie.removeWord('haha')).to.be.false;
    expect(trie.removeWord(true)).to.be.false;

  });

  it('"removeWord" method should return false for incomplete words', () => {

    trie.addWord('abcdefg');
    trie.addWord('abcxyz');

    expect(trie.removeWord('abc')).to.be.false;
    expect(trie.removeWord('abcdef')).to.be.false;

    expect(trie.isMember('abcdefg')).to.be.true;
    expect(trie.isMember('abcxyz')).to.be.true;

    trie.removeWord('abcxyz');

    expect(trie.isMember('abcxyz')).to.be.false;
    expect(trie.isMember('abcdefg')).to.be.true;

    trie.removeWord('abcdefg');

    expect(trie.isMember('abc')).to.be.false;

  })

  it('"removeWord" method should leave prefixes intact if other words branch from it', () => {

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
                         'programming', 
                         'programmer', 
                         'progamer', 
                         'profession'
                         ];
    expect(predictions).to.be.an('array');
    expect(predictions).to.have.lengthOf(4);
    expect(predictions).to.have.members(expectedWords);
  });

  it('"predict" method should return false for prefixes that do not exist', () => {

    trie.addWord('hello');
    trie.addWord('abc');

    expect(trie.predict('hey')).to.be.false;
    expect(trie.predict('helloo')).to.be.false;
    expect(trie.predict('hh')).to.be.false;
    expect(trie.predict()).to.be.have.lengthOf(2);
    expect(trie.predict()).to.have.members(['hello', 'abc']);

  });

  it('"removePrefix" method should return false for invalid inputs and prefixes that do not exist', () => {

    trie.addWord('hello');
    trie.addWord('abc');

    expect(trie.removePrefix()).to.be.false;
    expect(trie.removePrefix('')).to.be.false;
    expect(trie.removePrefix('ho')).to.be.false;
    expect(trie.removePrefix('helo')).to.be.false;
    expect(trie.removePrefix('abcd')).to.be.false;

  });

  it('"removePrefix" method should remove all words with a given prefix, including the prefix itself', () => {

    trie.addWord('pregame');
    trie.addWord('predict');
    trie.addWord('prepare');
    trie.addWord('preparation');
    trie.addWord('program');
    trie.addWord('progress');
    trie.addWord('print');
    trie.addWord('prime');
    trie.addWord('prejudice');
    trie.addWord('predecessor');
    trie.addWord('predilection');

    expect(trie.predict('')).to.have.lengthOf(11);

    trie.removePrefix('prep');

    expect(trie.isMember('prepare')).to.be.false;
    expect(trie.isMember('preparation')).to.be.false;
    expect(trie.isMember('prep')).to.be.false;
    expect(trie.predict('')).to.have.lengthOf(9);

    trie.removePrefix('pre');

    expect(trie.isMember('pregame')).to.be.false;
    expect(trie.isMember('predict')).to.be.false;
    expect(trie.isMember('prejudice')).to.be.false;
    expect(trie.isMember('predilection')).to.be.false;
    expect(trie.predict('')).to.have.lengthOf(4);
    expect(trie.predict('')).to.have.members(['program', 'progress', 'print', 'prime']);

  });

  it('"removePrefix" should return a list of removed words', () => {

    trie.addWord('prepare');
    trie.addWord('preparation');
    trie.addWord('predecessor');
    trie.addWord('predilection');
    trie.addWord('pregame');
    trie.addWord('predict');
    trie.addWord('prejudice');
    trie.addWord('program');
    trie.addWord('progress');
    trie.addWord('print');
    trie.addWord('prime');
    trie.addWord('a');

    expect(trie.removePrefix('prep')).to.have.lengthOf(2).and.have.members(['prepare', 'preparation']);
    expect(trie.removePrefix('pre')).to.have.lengthOf(5).and.have.members(['predecessor', 'predilection', 'pregame', 'predict', 'prejudice']);
    expect(trie.predict('p')).to.have.lengthOf(4).and.have.members(['program', 'progress', 'print', 'prime']);
    expect(trie.isMember('pre')).to.be.false;

  });

  it('"removePrefix" should work if the input is already a complete word', () => {

    trie.addWord('hello');
    trie.addWord('hellish');
    trie.addWord('helltower');


    trie.removePrefix('helli');
    trie.removePrefix('helltower');

    expect(trie.isMember('hell')).to.be.true;
    expect(trie.isMember('helli')).to.be.false;
    expect(trie.isMember('hellt')).to.be.true;
    expect(trie.isMember('helltowe')).to.be.true;
    expect(trie.isMember('helltower')).to.be.false;

    expect(trie.predict('h')).to.have.lengthOf(2).and.have.members(['hello', 'helltowe']);

  });


});