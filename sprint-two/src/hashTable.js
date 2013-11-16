var HashTable = function(){
  this._limit = 8;

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
  var i = hashingFunction(k, this._limit);
  console.log(i);
  var got = this._storage.get(i);
  if (Array.isArray(got)){
    got.push([k, v]);
    this._storage.set(i, got);
  } else {
    this._storage.set(i, [[k, v]]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = hashingFunction(k, this._limit);
  var retr = this._storage.get(i);
  for (var a = 0; a < retr.length; a++) {
    if (retr[a][0] === k) {
      return retr[a][1];
    }
  }
  return "key does not exist";
};

HashTable.prototype.remove = function(k){
  var i = hashingFunction(k, this._limit);
  var remo = this._storage.get(i);
  for (var a = 0; a < remo.length; a++) {
    if (remo[a][0] === k) {
      remo.splice(a,1);
      this._storage.set(i, remo);
    }
  }
  // this._storage
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
