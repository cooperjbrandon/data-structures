var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.removeParent = treeMethods.removeParent;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(node){
  node.parent = this;
  this.children.push(node);
};

treeMethods.removeParent = function(){
  for (var i = 0; i < this.parent.children.length; i++) {
    if (this.parent.children[i] === this){
      this.parent.children.splice(i, 1);
    }
  }
  this.parent = null;
};

treeMethods.contains = function(value){
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
