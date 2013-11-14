var makeStack = function() {
  var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.length = 0; // Hint: set an initial value here

  // Implement the methods below

  instance.push = stackMethods.push;
  instance.pop = stackMethods.pop;
  instance.size = stackMethods.size;

  return instance;
  // Hey! Copy your code from src/functional/stack.js and paste it here
};

var stackMethods = {

  push: function(value){
    this.storage[this.length] = value;
    this.length++;
  },

  pop: function(){
    this.length && this.length--;
    return this.storage[this.length];
  },

  size: function(){
    return this.length;
  }

};
