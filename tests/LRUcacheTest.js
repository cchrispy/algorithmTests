import { expect } from 'chai';
import LRUcache from '../src/LRUcache';

describe('LRU Cache', () => {

  var cache;
  beforeEach(() => {
    cache = new LRUcache(5);
  })

  it('Should be a class', () => {
    expect(cache).to.be.an.instanceof(LRUcache);
  });

  it('Should have get(key) and set(key, value) operations', () => {
    expect(cache.get).to.be.a('function');
    expect(cache.set).to.be.a('function');
  });

  it('Should be able to add elements up to the limit size', () => {
    cache.set('key1', 'value1');
    cache.set('key2', 'value2');
    cache.set('key3', 'value3');
    cache.set('key4', 'value4');
    cache.set('key5', 'value5');
    expect(cache.get('key1')).to.equal('value1');
    expect(cache.get('key2')).to.equal('value2');
    expect(cache.get('key3')).to.equal('value3');
    expect(cache.get('key4')).to.equal('value4');
    expect(cache.get('key5')).to.equal('value5');
    expect(cache.get('dummy')).to.be.null;
  });

  it('Should invalidate elements that are too old when size is overflowed', () => {
    cache.set('key1', 'value1');
    cache.set('key2', 'value2');
    cache.set('key3', 'value3');
    cache.set('key4', 'value4');
    cache.set('key5', 'value5');
    cache.set('key6', 'value6');
    expect(cache.get('key1')).to.be.null;
    expect(cache.get('key2')).to.equal('value2');
    expect(cache.get('key3')).to.equal('value3');
    expect(cache.get('key4')).to.equal('value4');
    expect(cache.get('key5')).to.equal('value5');
    expect(cache.get('key6')).to.equal('value6');
  });

  describe('Test Cases', () => {

    var lru;
    beforeEach(() => {
      lru = new LRUcache(4);
      // lru.set('key1', 'value1');
      // lru.set('key2', 'value2');
      // lru.set('key3', 'value3');
      // lru.set('key4', 'value4');
      // lru.set('key5', 'value5');
      // lru.set('key6', 'value6');
    });

    it('Case 1', () => {
      lru.set('key1', 'value1');
      lru.set('key2', 'value2');
      lru.set('key3', 'value3');
      lru.set('key4', 'value4');

      expect(lru.get('key1')).to.equal('value1');

      lru.set('key5', 'value5');
      lru.set('key6', 'value6');

      expect(lru.get('key2')).to.be.null;
      expect(lru.get('key3')).to.be.null;
      expect(lru.get('key4')).to.equal('value4');
      expect(lru.get('key5')).to.equal('value5');
      expect(lru.get('key6')).to.equal('value6');
      expect(lru.get('key1')).to.equal('value1');
    })

  })

});