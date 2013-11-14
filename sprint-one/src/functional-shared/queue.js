var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
 instance.storage = {};
  instance.length = 0;
  instance.lastRemoved = -1;
  instance.orderAdded = 0;

  // Implement the methods below

  instance.enqueue = queueMethods.enqueue;
  instance.dequeue = queueMethods.dequeue;
  instance.size = queueMethods.size;

  return instance;
  // Hey! Copy your code from src/functional/queue.js and paste it here
};

var queueMethods = {

  enqueue: function(value){
    this.storage[this.orderAdded] = value;
    this.orderAdded++;
    this.length++;
  },

  dequeue: function(){
    this.length && this.length--;
    this.lastRemoved++;
    return this.storage[this.lastRemoved];
  },

  size: function(){
    return this.length;
  }
};
