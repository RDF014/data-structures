var LinkedList = function() {
  var list = {};

  list.head = null;
  list.tail = null;

  
  list.addToTail = function(value) {
    list.tail = Node(value);
    if (list.head === null) {
      list.head = Node(value);
    } else {
      list.head.next = list.tail.value;
    }
  };

  list.removeHead = function() {
    var headToRemove = list.head.value;
    list.head.value = list.tail.value;
    return headToRemove;
  };

  list.contains = function(target) {
    if (list.head.value === target || list.tail.value === target) {
      return true;
    } 
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  // addToTail will have O(1) constant complexity as we create a new node,
  change current tail's reference to point to the new node, and change the new 
  tail to refer to last value
  // removeHead will have O(1) constant complexity as we remove the head, and just reference to
  //the next item in the list
  //contains will have O(1) constant complexity as we choose either head or tail for the target value
 */
