var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (typeof item === 'string') {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  var isTrue = false;

  this._storage.forEach(function (value) {
    if (value === item) {
      isTrue = true;
    }
  });

  return isTrue;
};

setPrototype.remove = function(item) {
  var index = this._storage.indexOf(item);

  if (index !== -1) {
    this._storage.splice(index, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  add - O(1) as we're just simple adding to the end of the set.
  contains - O(n) as we're iterating through the set to see if our item is in the set.
  remove - O(n) as we're iterating through the set to find the index to remove, and then shift all the
  other numbers over.
 */
