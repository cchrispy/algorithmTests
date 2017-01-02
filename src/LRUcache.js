// Implement an LRU cache. Supported operations are get(key) and set(key, value) 
// [in O(1) time complexity if you can]. When the cache reaches max capacity, it should invalidate
// the least recently used item before inserting a new one.
// HINT: Double Linked List

import DoublyLinkedList from '../tools/doublyLinkedList';

class LRUcache {
  constructor(limit = 5) {

    this.limit = limit;
    this._size = 0;

    this.list = new DoublyLinkedList();
    this.refs = {};

  }

  set(key, value) {
    /*
    ** Append to the doubly linked list. Store references to that node in refs.
    ** If capacity is reached, then remove the oldest item from the list AND refs.
    ** The item's age should be kept by the order of the linked list.
    ** Oldest items will be the one closest to the tail.
    */

    if (this._size >= this.limit) { // remove the tail and the reference to the node
      var tail = this.list.tail();
      var removeKey = tail.data[0];
      console.log('HEY THERE DUDE', removeKey);
      tail.remove();
      delete this.refs[removeKey];
      this._size--;
    }

    this.refs[key] = this.list.prepend([key, value]);
    this._size++;
    return key;
  }

  get(key) {
    /*
    ** Find that node from the references. If it doesn't exist, return null.
    ** If it exists, then re-order the linked list such that the node becomes the
    ** most recently used node (closest to the head). Can be done by removing the node and
    ** appending a brand new node in the list, then making the ref point to that.
    ** [More optimal if we could rearrange the pointers of nodes in the linked list.]
    ** Return the value associated with the key.
    */
    
    if (!this.refs[key]) { return null; }

    var node = this.refs[key];
    var value = node.data[1];
    node.remove();

    this.refs[key] = this.list.prepend([key, value]);
    return value;

  }

  size() {
    return this._size;
  }

}


export default LRUcache;
