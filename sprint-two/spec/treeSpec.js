describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree('Root');
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

   it("should be able to tell if a given node contains the passed in value", function() {
    var firstNode = makeTree('a');
    var secondNode = makeTree('b');
    tree.addChild(firstNode);
    tree.addChild(secondNode);
    var thirdNode = makeTree('c');
    var fourthNode = makeTree('d');
    var fifthNode = makeTree('e');
    firstNode.addChild(thirdNode);
    secondNode.addChild(fourthNode);
    secondNode.addChild(fifthNode);
    expect(fourthNode.parent.parent.value).toEqual('Root');
    expect(tree.contains('b')).toEqual(true);
    expect(tree.contains('asd')).toEqual(false);
    expect(tree.contains('d')).toEqual(true);
    expect(tree.contains('e')).toEqual(true);
  });
  // Add more tests here to test the functionality of tree.
});
