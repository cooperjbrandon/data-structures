// Note: don't use an array to do this.

var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(val){
    if (list.head === null){
      list.tail = makeNode(val);
      list.head = list.tail;
    } else {
      list.tail.next = makeNode(val);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    var removed = list.head.value;
    list.head = list.head.next;
    if(list.head === null) {
      list.tail = null;
    }
    return removed;
  };

  list.contains = function(val){
    return checkVal(list.head, val);
  };

  return list;
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