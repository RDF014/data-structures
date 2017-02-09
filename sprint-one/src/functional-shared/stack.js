var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  debugger;
  var someInstance = {};
  someInstance.storage = {};
  someInstance.num = 0;

  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.num] = value;
    this.num++;
  },
  pop: function() {
    this.num--;
    return this.storage[this.num];
  },
  size: function() {
    // var output = Math.max(0, size);
    return Math.max(0, this.num);
  }
};

