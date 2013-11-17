var HashTable = function(){
  this._limit = 8;
  this._size = 0;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  this._size++;

  var i = hashingFunction(k, this._limit);
  var bucket = this._storage.get(i) || []; // 1st run: bucket = []; 2nd run: 
  for (var a = 0; a < bucket.length; a++) {
    var pair = bucket[a];
    if (pair[0] === k){
      pair[1] = v;
      return;
    }
  }

  bucket.push([k,v]);
  this._storage.set(i, bucket);

  if ((this._size / this._limit) > 0.75) {
    this._limit = this._limit * 2;
    this.resize(this._limit);
  }

};

HashTable.prototype.resize = function(limit) {
  var oldStorage = this._storage;
  this._storage = makeLimitedArray(this._limit);

  var that = this;
  this._size = 0;
  oldStorage.each(function(bucket){
    for (var a = 0; a < bucket.length; a++){
      var pair = bucket[a];
      that.insert(pair[0], pair[1]);
    }
  });
};

HashTable.prototype.retrieve = function(k){

  var i = hashingFunction(k, this._limit);
  var bucket = this._storage.get(i) || [];
  for (var a = 0; a < bucket.length; a++) {
    var pair = bucket[a];
    if (pair[0] === k){
      return pair[1];
    }
  }

  return null;

};

HashTable.prototype.remove = function(k){

  this._size--;
  var i = hashingFunction(k, this._limit);
  var bucket = this._storage.get(i) || [];
  for (var a = 0; a < bucket.length; a++) {
    var pair = bucket[a];
    if (pair[0] === k){
      bucket.splice(a, 1);
    }
  }

};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
