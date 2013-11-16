describe("tree", function() {
  var tree;
  var firstNode;
  var secondNode;
  var thirdNode;
  var fifthNode;
  var fourthNode;

  beforeEach(function() {
    tree = makeTree('Root');
    firstNode = makeTree('a');
    secondNode = makeTree('b');
    tree.addChild(firstNode);
    tree.addChild(secondNode);
    thirdNode = makeTree('c');
    fourthNode = makeTree('d');
    fifthNode = makeTree('e');
    firstNode.addChild(thirdNode);
    secondNode.addChild(fourthNode);
    secondNode.addChild(fifthNode);
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

   it("should be able to tell if a given node contains the passed in value for addChild", function() {
    expect(fourthNode.parent.parent.value).toEqual('Root');
    expect(tree.contains('b')).toEqual(true);
    expect(tree.contains('asd')).toEqual(false);
    expect(tree.contains('d')).toEqual(true);
    expect(tree.contains('e')).toEqual(true);
  });

   it("should be able to tell if a given node contains the passed in value for removeParent", function() {
    secondNode.removeParent();
    expect(fourthNode.parent.parent).toEqual(null);
    expect(tree.contains('b')).toEqual(false);
    expect(secondNode.contains('d')).toEqual(true);
    expect(tree.contains('a')).toEqual(true);
    expect(tree.contains('e')).toEqual(false);
  });
  // Add more tests here to test the functionality of tree.
});
