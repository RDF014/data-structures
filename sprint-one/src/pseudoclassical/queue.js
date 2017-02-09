var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.num = 0;
  this.addCounter = 0;
  this.removeCounter = 0;

};


Queue.prototype.enqueue = function(value) {
  this.storage[this.addCounter] = value;
  this.num++;
  this.addCounter++;
};

Queue.prototype.dequeue = function() {
  this.num--;
  var item = this.storage[this.removeCounter];
  this.removeCounter++;
  return item;
};

Queue.prototype.size = function() {
  return Math.max(0, this.num);
};

var queue = new Queue();


