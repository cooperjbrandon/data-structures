describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it("should handle hash function collisions", function(){
    // force the hash function to return 0
    spyOn(window, 'hashingFunction').andReturn(0);
    var v1 = 'val1', v2 = 'val2'; v3 = 'val3';
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    hashTable.insert(v3, v3);
    expect(hashTable.retrieve(v1)).toEqual(v1);
    expect(hashTable.retrieve(v2)).toEqual(v2);
    expect(hashTable.retrieve("hello")).toEqual("key does not exist");
  });

    it("should be able to remove keys", function(){
    // force the hash function to return 0
    spyOn(window, 'hashingFunction').andReturn(0);
    var v1 = 'val1', v2 = 'val2'; v3 = 'val3';
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    hashTable.insert(v3, v3);
    hashTable.remove(v1);
    hashTable.remove(v2);
    expect(hashTable.retrieve(v3)).toEqual(v3);
  });
  // add more tests!
});
