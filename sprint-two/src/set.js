var makeSet = function(){
  var set = Object.create(setPrototype); // fix me
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(str){
  this._storage[str] = true;
};

setPrototype.contains = function(str){
  if (this._storage[str] === true) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(str){
  if (this._storage[str] === true) {
    delete this._storage[str];
  }
};
