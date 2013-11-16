describe("binarySearchTree", function() {
  var binarySearchTree;
  var firstNode;
  var secondNode;
  var thirdNode;
  var fifthNode;
  var fourthNode;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree('Root');
    firstNode = makeBinarySearchTree(4);
    secondNode = makeBinarySearchTree(3);
    binarySearchTree.insert(firstNode);
    binarySearchTree.insert(secondNode);
    thirdNode = makeBinarySearchTree(5);
    fourthNode = makeBinarySearchTree(9);
    fifthNode = makeBinarySearchTree(8);
    firstNode.insert(thirdNode);
    secondNode.insert(fourthNode);
    secondNode.insert(fifthNode);
    console.log(binarySearchTree);
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });

  it("should be able to tell if a given node contains the passed in value for insert", function() {
    expect(binarySearchTree.contains(4)).toEqual(true);
    expect(binarySearchTree.contains('asd')).toEqual(false);
    expect(binarySearchTree.contains(9)).toEqual(true);
    expect(binarySearchTree.contains(5)).toEqual(true);
  });

  it("should be able to tell if a given node contains the passed in value for removeParent", function() {
    secondNode.removeParent();
    expect(fourthNode.parent.parent).toEqual(null);
    expect(binarySearchTree.contains(3)).toEqual(false);
    expect(secondNode.contains(8)).toEqual(true);
    expect(binarySearchTree.contains(4)).toEqual(true);
    expect(binarySearchTree.contains(9)).toEqual(false);
  });
  // add more tests here to test the functionality of binarySearchTree
});
