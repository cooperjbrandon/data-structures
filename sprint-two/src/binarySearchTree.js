var makeBinarySearchTree = function(value){
  var newBSTree = {};
  newBSTree.value = value;
  newBSTree.children = new Array(2);
  newBSTree.parent = null;
  newBSTree.insert = bsTreeMethods.insert;
  newBSTree.contains = bsTreeMethods.contains;
  newBSTree.depthFirstLog = bsTreeMethods.depthFirstLog;
  newBSTree.left = null;
  newBSTree.right = null;
  return newBSTree;
};

var bsTreeMethods = {};

bsTreeMethods.insert = function(node){
  if (node.value > this.value) {
    if (this.children[1] === undefined) {
      this.children[1] = node;
      node.left = this.children[0];
      if (this.children[0] !== undefined) {
        this.children[0].right = this.children[1];
      }
    } else {
      this.children[1].insert(node);
    }
  } else if (node.value < this.value) {
    if (this.children[0] === undefined) {
      this.children[0] = node;
      node.right = this.children[1];
      if (this.children[1] !== undefined) {
        this.children[1].left = this.children[0];
      }
    } else {
      this.children[0].insert(node);
    }
  }
};

bsTreeMethods.contains = function(value){
  if (this.value === value) {
    return true;
  } else if (value > this.value && this.children[1] !== undefined) {
    return this.children[1].contains(value);
  } else if (value < this.value && this.children[0] !== undefined) {
    return this.children[0].contains(value);
  }

  return false;

};

bsTreeMethods.depthFirstLog = function(fn){

  var result = fn.call(this, arguments[1]);
  if(this.children[0] !== undefined && (result === "both" || result === "left")) {
    result = this.children[0].depthFirstLog(fn, arguments[1]);
  }
  if(this.children[1] !== undefined  && (result === "both" || result === "right")) {
    result = this.children[1].depthFirstLog(fn, arguments[1]);
  }
  return result;

};