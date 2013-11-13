var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var lastRemoved = -1;
  var orderInLine = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[orderInLine] = value;
    orderInLine++;
    size++;
  };

  instance.dequeue = function(){
    size && size--;
    lastRemoved++;
    return storage[lastRemoved];
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
