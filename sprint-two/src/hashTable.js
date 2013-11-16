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
  this._storage.set(i,v);


  if (this._storage.get(i) === undefined) {
    this._storage.set(i, v);
  } else {
    var temp = this._storage.get(i);
    this._storage.set(i,v);
    this._storage.set(i[0], temp);
    this._storage.set(i[1], v);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = hashingFunction(k, this._limit);
  if (Array.isArray(this._storage.get(i))) {
}
};

HashTable.prototype.remove = function(k){
  var i = hashingFunction(k, this._limit);
  // this._storage
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you

newHash = new HashTable();
newHash.insert("hat", "brown");