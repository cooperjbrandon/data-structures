// Note: don't use an array to do this.

var LinkedList = function(){
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function(val){
    if (this.head === null){
      this.tail = makeNode(val);
      this.head = this.tail;
    } else {
      this.tail.next = makeNode(val);
      this.tail = this.tail.next;
    }
  };

LinkedList.prototype.removeHead = function(){
    var removed = this.head.value;
    this.head = this.head.next;
    if(this.head === null) {
      this.tail = null;
    }
    return removed;
  };

LinkedList.prototype.contains = function(val){
    return checkVal(this.head, val);
  };

var makeNode = function(val){
  var node = {};
  node.value = val;
  node.next = null;
  return node;
};

var checkVal = function(link, target) {
  if (link.value === target) {
    return true;
  } else if (link.next === null) {
    return false;
  } else {
    return checkVal(link.next, target);
  }
};