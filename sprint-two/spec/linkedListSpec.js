describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  // it("should return the first node of the list when .removeHead is called", function(){
  //   expect(linkedList.)
  // });

  // it('does not error when removing from an empty queue', function() {
  //   expect(function(){ linkedList.removeHead(); }).not.throws();
  // });

  it('allows sequentially adding and removing items', function() {
    linkedList.addToTail('a');
    expect(linkedList.removeHead()).toEqual('a');
    linkedList.addToTail('b');
    expect(linkedList.removeHead()).toEqual('b');
  });

  it('points to correct head when sequentially adding and removing items', function() {
    linkedList.addToTail('a');
    expect(linkedList.head).toEqual('a');
    linkedList.addToTail('b');
    linkedList.addToTail('c');
    linkedList.removeHead();
    expect(linkedList.head).toEqual('b');
  });

  // add more tests here to test the functionality of linkedList
});