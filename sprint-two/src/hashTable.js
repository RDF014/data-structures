

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }
  
  var tuple = [k, v];
  
  var replace = false; 
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (k === this._storage.get(index)[i][0]) {
      this._storage.get(index)[i][1] = v;
      replace = true;
      break;
    } 
  }
  if (!replace) {
    this._storage.get(index).push(tuple);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket.length > 0) {
    var val = this._storage.get(index)[0][1];
    bucket.forEach(function(valu) {
      if (valu[0] === k) {
        val = valu[1];
      }
    });
    return val;
  } else {
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(valu, i) {
    if (i === index) {
      valu.splice(0, 1);
    }
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 insert best case senario O(1) but in  most case O(n) as we require iteration
 over the tuples in the bucket 

 retrieve O(n) as we require iteration over the bucket tuples

 remove  O(n) as etarate over the storage to find the right index, then we go into the bucket 
 and remove the first tuple
 */


