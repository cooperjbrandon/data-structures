describe("binarySearchTree", function() {
  var binarySearchTree;
  var firstNode;
  var secondNode;
  var thirdNode;
  var fifthNode;
  var fourthNode;
  var sixthNode;
  var someCallBack = function(node) {
    node.value = node.value + 1;
  };

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(100);
    firstNode = makeBinarySearchTree(4);
    secondNode = makeBinarySearchTree(3);
    binarySearchTree.insert(firstNode);
    binarySearchTree.insert(secondNode);
    thirdNode = makeBinarySearchTree(5);
    fourthNode = makeBinarySearchTree(10);
    fifthNode = makeBinarySearchTree(8);
    // sixthNode = makeBinarySearchTree(9);
    firstNode.insert(thirdNode);
    secondNode.insert(fourthNode);
    secondNode.insert(fifthNode);
    // thirdNode.insert(sixthNode);
    binarySearchTree.depthFirstLog(someCallBack);
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

  // it("should be able to tell if a given node contains the passed in value for removeParent", function() {
  //   secondNode.removeParent();
  //   expect(fourthNode.parent.parent).toEqual(null);
  //   expect(binarySearchTree.contains(3)).toEqual(false);
  //   expect(secondNode.contains(8)).toEqual(true);
  //   expect(binarySearchTree.contains(4)).toEqual(true);
  //   expect(binarySearchTree.contains(9)).toEqual(false);
  // });
  it("should give the correct answer for .left and .right", function() {
    expect(fifthNode.right).toEqual(fourthNode);
    expect(fifthNode.left).toEqual(null);
    expect(fourthNode.right).toEqual(null);
    expect(fourthNode.left).toEqual(fifthNode);
    expect(thirdNode.left).toEqual(null);
    expect(thirdNode.right).toEqual(null);
    expect(secondNode.right).toEqual(firstNode);
    expect(secondNode.left).toEqual(null);
    expect(firstNode.left).toEqual(secondNode);
    expect(firstNode.right).toEqual(null);
    // expect(sixthNode.left).toEqual(fifthNode);
    // expect(sixthNode.right).toEqual(fourthNode);
  });

  // add more tests here to test the functionality of binarySearchTree
});
