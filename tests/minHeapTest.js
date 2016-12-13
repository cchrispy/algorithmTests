import { expect } from 'chai';
import MinHeap from '../src/minHeap';

var insert = (arr, heap) => {
  arr.forEach(x => {
    heap.insert(x);
    // console.log(heap._storage);
  })
}

var remove = (count, heap, cb) => {
  for (var i = 0; i < count; i++) {
    cb(heap.extractMin());
    // console.log('REMOVING ITEM: ', heap.extractMin());
    // console.log(heap._storage);
  }
}

describe('Min Heap', () => {

  // var newHeap = new MinHeap();
  // insert([4, 10, 9, 8, 12, 17, 13, 7, 2, 3, 11], newHeap);
  // remove(13, newHeap, x => console.log(x));

  // var heap_2 = new MinHeap();
  // insert([9, 13, 10, 12, 11, 15, 14], heap_2)
  // remove(1, heap_2, x => console.log(x));


  it('Should be a class', () => {
    var heap = new MinHeap();
    expect(MinHeap).to.be.a('function');
    expect(heap).to.be.an.instanceof(MinHeap);
  });

  it('Should have an insert method', () => {
    var heap = new MinHeap();
    expect(heap.insert).to.exist;
    expect(heap.insert).to.be.a('function');
  });

  it('Should have an extractMin method', () => {
    var heap = new MinHeap();
    expect(heap.extractMin).to.exist;
    expect(heap.extractMin).to.be.a('function');
  });

  describe('Test cases', () => {

    var heap;
    beforeEach(() => {
      heap = new MinHeap();
      insert([4, 10, 9, 8, 12, 17, 13, 7, 2, 3, 11], heap);
    });

    it('Should insert new numbers in the appropriate order', () => {
      expect(heap._storage.slice(1)).to.eql([2, 3, 9, 7, 4, 17, 13, 10, 8, 12, 11])
    });

    it('Should retrieve the minimum value', () => {
      remove(11, heap, min => {
        expect(min).to.be.at.most(Math.min(...heap._storage.slice(1)));
      });
    });

  })

});