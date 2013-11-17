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
    } else {
      this.children[1].insert(node);
    }
  } else {
    if (this.children[0] === undefined) {
      this.children[0] = node;
      node.right = this.children[1];
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
  fn(this);
  if(this.children[0] !== undefined) {
    this.children[0].depthFirstLog(fn);
  }
  if(this.children[1] !== undefined) {
    this.children[1].depthFirstLog(fn);
  }

  // for (var i = 0; i < this.children.length; i++) {
  //   this.children[i].depthFirstLog(fn);
  // }
};

// bsTreeMethods.removeParent = function(){
//   for (var i = 0; i < this.parent.children.length; i++) {
//     if (this.parent.children[i] === this){
//       this.parent.children.splice(i, 1);
//     }
//   }
//   this.parent = null;
// };



