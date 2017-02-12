var BinarySearchTree = function(value) {
  
  var treeInstance = Object.create(binaryTreeMethods);
  treeInstance.value = value;

  treeInstance.left = null;
  treeInstance.right = null;

  return treeInstance;
  
};

var binaryTreeMethods = {
  
  insert: function(value) {
    if (value > this.value) {
      if (this.right === null) {
        this.right = BinarySearchTree(value); 
      } else {
        this.right.insert(value);
      }
    } else if (value < this.value) {
      if (this.left === null) {
        this.left = BinarySearchTree(value);
      } else {
        this.left.insert(value);
      } 
    }
  },
  contains: function(value) {
    var isTrue = false;
    var topValue = this.value;

    if (topValue === value) {
      isTrue = true;
    } 

    if (value > topValue && this.right) {
      if (this.right.contains(value)) {
        isTrue = true;
      }
    } else if (value < topValue && this.left) {
      if (this.left.contains(value)) {
        isTrue = true;
      }
    }
    return isTrue;
  },
  depthFirstLog: function(cb) {
    cb(this.value);

    if (this.right) {
      this.right.depthFirstLog(cb);
    }
    if (this.left) {
      this.left.depthFirstLog(cb);
    }

  }

};

/*
 * Complexity: What is the time complexity of the above functions?

 insert - O(log(n)) as we're constantly reducing the size of the serach area
 contains - O(log(n)) as we're constantly reducing the size of the search area
 depthFirstLog - O(n) as we invoke the function on every node. Worst case would be
 O(n^2) depending on the function we want to run. 
 */
