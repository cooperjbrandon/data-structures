var makeBinarySearchTree = function(value){
  var newBSTree = {};
  newBSTree.value = value;
  newBSTree.children = [];
  newBSTree.parent = null;
  newBSTree.insert = bsTreeMethods.insert;
  newBSTree.contains = bsTreeMethods.contains;
  newBSTree.removeParent = bsTreeMethods.removeParent;
  newBSTree.depthFirstLog = bsTreeMethods.depthFirstLog;
  newBSTree.left = null;
  newBSTree.right = null;
  return newBSTree;
};

var bsTreeMethods = {};

bsTreeMethods.insert = function(node){
  node.parent = this;
  var childSize = this.children.length;
  if (childSize > 0 && node.value >= this.children[childSize - 1].value) {
    node.left = this.children[childSize - 1];
    this.children[childSize - 1].right = node;
    this.children.push(node);
  } else {
    var result = 0;
    var keepGoing = true;
    for (var i = 0; i < this.children.length; i++) {
      if (keepGoing && node.value < this.children[i].value) {
        result = i;
        keepGoing = false;
      }
    }
    this.children.splice(result, 0 , node);
    if (this.children.length !== 1) {
      node.right = this.children[result + 1];
      this.children[result+1].left = node;
    }
    if (result !== 0) {
      node.left = this.children[result - 1];
      this.children[result- 1].right = node;
    }
  }
};

bsTreeMethods.removeParent = function(){
  for (var i = 0; i < this.parent.children.length; i++) {
    if (this.parent.children[i] === this){
      this.parent.children.splice(i, 1);
    }
  }
  this.parent = null;
};

bsTreeMethods.contains = function(value){
  var child;
  var temp;
  if (this.value === value) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++){
      child = this.children[i];
      temp = child.contains(value);
      if (temp !== false){
        return temp;
      }
    }
  }
  return false;
};

bsTreeMethods.depthFirstLog = function(node){

};

