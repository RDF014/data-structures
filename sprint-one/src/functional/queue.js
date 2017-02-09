var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  
  var addCounter = 0;
  var removeCounter = 0;
  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[addCounter] = value;
    size++;
    addCounter++;
  };

  someInstance.dequeue = function() {
    size--;  
    var item = storage[removeCounter];
    removeCounter++;
    return item;
  };

  someInstance.size = function() {
    return Math.max(0, size);
  };

  return someInstance;
};
