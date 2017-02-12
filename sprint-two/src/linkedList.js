var LinkedList = function() {
  var list = {};

  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var firstAdd = false;
    list.tail = Node(value);
    if (list.head === null) {
      list.head = list.tail;
      firstAdd = true;
    } 
    
    var addLink = function (obj) {
      if (obj.next === null) {
        obj.next = list.tail;     
      } else {
        addLink(obj.next);
      }
    };
    if (!firstAdd) {
      addLink(list.head);
    }
  };

  list.removeHead = function() {
    var headToRemove = list.head.value;
    var nextValue = list.head.next;
    list.head = nextValue;
    return headToRemove;
  };

  list.contains = function(target) {
    var found = false;
    
    var findTarget = function(head) {
      if (head.value === target) {
        found = true;
      } else if (head.next !== null) {
        if (findTarget(head.next)) {
          found = true;
        }
      } 
    };
 
    findTarget(list.head);
    return found;
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
