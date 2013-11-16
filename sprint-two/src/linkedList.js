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
    this.tail.next.previous = this.tail;
    this.tail = this.tail.next;
  }
};

LinkedList.prototype.addToHead = function(val){
  if (this.head === null){
    this.tail = makeNode(val);
    this.head = this.tail;
  } else {
    this.head.previous = makeNode(val);
    this.head.previous.next = this.head;
    this.head = this.head.previous;
  }
};

LinkedList.prototype.removeHead = function(){
  if (this.head === null) {
    return null;
  }
  var removed = this.head.value;
  this.head = this.head.next;
  if(this.head === null) {
    this.tail = null;
  }
  return removed;
};

LinkedList.prototype.removeTail = function(){
  if (this.head === null) {
    return null;
  }
  var removed = this.tail.value;
  this.tail = this.tail.previous;
  if(this.tail === null) {
    this.head = null;
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
  node.previous = null;
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