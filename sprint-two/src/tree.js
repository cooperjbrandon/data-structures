var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(node){
  this.children.push(node);
};

treeMethods.contains = function(value){
  var child;
  var temp;
  if (this.value === value) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++){
      console.log(temp);
      child = this.children[i];
      temp = child.contains(value);
      if (temp !== false){
        return temp;
      }
    }
  }
  return false;
};
