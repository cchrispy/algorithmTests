import { expect } from 'chai';
import MinHeap from '../src/minHeap';

var insert = (arr, heap) => {
  arr.forEach(x => {
    heap.insert(x);
    console.log(heap._storage);
  })
}

describe('Min Heap', () => {

  // var heap;
  // beforeEach(() => {
  //   heap = new MinHeap();
  //   heap.insert(4);
  //   heap.insert(10);
  //   heap.insert(9);
  //   heap.insert(8);
  //   heap.insert(12);
  //   heap.insert(17);
  //   heap.insert(13);
  //   heap.insert(7);
  //   heap.insert(2);
  //   heap.insert(3);
  //   heap.insert(11);
  // })

  // it('Should be a class', () => {
  //   expect(MinHeap).to.be.a('function');
  //   expect(heap).to.be.an.instanceof(MinHeap);
  // });

  // it('Should have an insert method', () => {
  //   expect(heap.insert).to.exist;
  //   expect(heap.insert).to.be.a('function');
  // });

  // it('Should have an extractMin method', () => {
  //   expect(heap.extractMin).to.exist;
  //   expect(heap.extractMin).to.be.a('function');


  // });
  var newHeap = new MinHeap();
  // insert([4, 10, 9, 8, 12, 17, 13, 7, 2, 3, 11], newHeap);
  insert([4, 10, 9], newHeap);

});