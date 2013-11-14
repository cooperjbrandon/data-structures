// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  var storage = {};
  var order = 0;
  var lastRemoved = -1;
  var size = 0;
  var containsObject = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(num){
    storage[order] = makeNode(num); //order = 0; storage.0 = newnode1; storage.0.value = num; storage.0.next = null
    // second call: order = 1; storage.1 = newnode2; storage.1.value = num2; storage.1.next = null;
    containsObject[storage[order].value] = true;
    if(size > 0) {
      storage[order-1].next = storage[order];
    } else {
      list.head = storage[order].value;
    }
    list.tail = storage[order].value;
    // storage.0.value = storage.1;
    order++; // order = 1
    size++; // size = 1;
  };

  list.removeHead = function(){
    if(size) {
      size--;
      lastRemoved++;
      list.head = storage[lastRemoved+1].value;
      delete containsObject.lastRemoved;
      return storage[lastRemoved].value;
    }};

  list.contains = function(num){
    return _.contains(Object.keys(containsObject), num);
  };

  return list;
};

var makeNode = function(num){
  var node = {};
  node.value = num;
  node.next = null;

  return node;
};
