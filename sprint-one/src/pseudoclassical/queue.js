var Queue = function() {

 this.storage = {};
  this.length = 0;
  this.lastRemoved = -1;
  this.orderAdded = 0;
};


  Queue.prototype.enqueue = function(value){
    this.storage[this.orderAdded] = value;
    this.orderAdded++;
    this.length++;
  };

  Queue.prototype.dequeue = function(){
    this.length && this.length--;
    this.lastRemoved++;
    return this.storage[this.lastRemoved];
  };

  Queue.prototype.size = function(){
    return this.length;
  };
