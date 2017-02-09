var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.num = 0;

  someInstance.addCounter = 0;
  someInstance.removeCounter = 0;

  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[ this.addCounter ] = value;
    this.num++;
    this.addCounter++;
  },
  dequeue: function() {
    this.num--;
    var item = this.storage[ this.removeCounter ];
    this.removeCounter++;
    return item;
  },
  size: function() {
    return Math.max(0, this.num);
  }
}; 


