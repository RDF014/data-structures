var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);
  // console.log("children " + newTree.children);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);

};

treeMethods.contains = function(target) {
  var isTrue = false;
  if (this.value === target) {
    isTrue = true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if ( this.children[i].contains(target) ) {
      isTrue = true;
    }
  }
  
  return isTrue;
};





/*
 * Complexity: What is the time complexity of the above functions?
 addChild would have a constat O(1) complexity as we add a child to an 
 end of an array without re arraning other array items.

 Contains would have a linear O(n) complexity as we iterate through each child
 and possbilty visiting all nodes.

 */
