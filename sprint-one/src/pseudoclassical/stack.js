var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.num = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.num] = value;
  this.num++;
};

Stack.prototype.pop = function() {
  this.num--;
  return this.storage[this.num];
};

Stack.prototype.size = function() {
  return Math.max(0, this.num);
};


var stack = new Stack();
