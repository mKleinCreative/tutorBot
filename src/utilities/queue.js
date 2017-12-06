

function Queue(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._head = 0
  this._tail = 0
}

Queue.prototype.enqueue = function (value) {
  if (this.count() < this._capacity) {
    this._storage[this._tail++] = value;
    return this.count()
  }
  return "Queue is full! try again soon.";
}

Queue.prototype.dequeue = function () {
  var element = this._storage[this._head];
  delete this._storage[this._head]
  if (this._head < this._tail) this._head++;
  return element;
}

Queue.prototype.peek = function () {
  return this._storage[this._head]
}

Queue.prototype.count = function () {
  return this._tail - this._head;
}

Queue.prototype.contains = function (value) {
  for (let i = this._head; i < this._tail; i++) {
    if (this._storage[i] === value) return true;
  }
  return false
}

Queue.prototype.until = function (value) {
  for (let i = this._head; i < this._tail; i++) {
    if (this._storage[i] === value) return i - this._head + 1;
  }
  return null;
}

Queue.prototype.backOfLine = function () {
  this.enqueue(this.dequeue())
}
let arr = [1, 2, 3]

let testQueue = new Queue(3)

testQueue.enqueue(1)
console.log('---===testQueue1===---', testQueue._storage)
testQueue.enqueue(2)
console.log('---===testQueue2===---', testQueue._storage)
testQueue.enqueue(3)
console.log('---===testQueue3===---', testQueue._storage)
testQueue.backOfLine()
console.log('---===testQueuefinal===---', testQueue._storage)


module.exports = Queue