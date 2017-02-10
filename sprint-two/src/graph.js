

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var found = false;
  for (var key in this.storage) {
    if (key === JSON.stringify(node)) {
      found = true;
    }
  }
  return found;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var nodeString = JSON.stringify(node);
  for (var key in this.storage) {
    for (var i = 0; i < this.storage[key].length; i++) {
      if (this.storage[key][i] === node) {
        this.storage[key].splice(i, 1);
      }
    }
  }
  delete this.storage[nodeString];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var isTrue = false;
  var fromN = JSON.stringify(fromNode);

  this.storage[fromN].forEach(function(node) {
    if (node === toNode) {
      isTrue = true;
    }
  });
  return isTrue;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var toN = JSON.stringify(toNode);
  var fromN = JSON.stringify(fromNode); 
  this.storage[toN].push(fromNode);
  this.storage[fromN].push(toNode); 
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var toN = JSON.stringify(toNode);
  var fromN = JSON.stringify(fromNode); 
  this.storage[toN].splice(0, 1);
  this.storage[fromN].splice(0, 1);
};



// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(Number (key));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  addNode - O(1) as we are not iterating through items. we simply add the new node to the object
  contains - O(n) because we are iterating through each node to see if it equals the node we are looking for.
  removeNode - O(n) as we visit every edge that connects to the node and remove when found
  hasEdge - O(n) as we iterate through the node's edges to see if it has the edge we're looking for. 
  addEdge - O(1) we push an edge to the nodes to connect them
  removeEdge - O(n) as we splice the edge, we must shift all the values over to fill the empty space. 
  forEachNode - O(n) as we invoke a function on each node. 

  

 */


