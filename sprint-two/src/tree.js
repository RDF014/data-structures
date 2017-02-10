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

  for (var i = 0; i < this.children.length; i++) {
    this.children[i].contains(target);
  }
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
