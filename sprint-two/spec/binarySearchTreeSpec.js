describe("binarySearchTree", function() {
  var binarySearchTree;
  var newTree;
  var firstNode;
  var secondNode;
  var thirdNode;
  var fifthNode;
  var fourthNode;
  var sixthNode;
  var someCallBack = function() {
    this.value = this.value + 1;
    return "both";
  };
  var bsTreeSearch = function(num) {
    if (num > this.value && this.children[1] !== undefined) {
      return "right";
    } else if (num < this.value && this.children[0] !== undefined) {
      return "left";
    } else {
      return this.value;
    }
  };

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(8);
    firstNode = makeBinarySearchTree(7);
    secondNode = makeBinarySearchTree(6);
    binarySearchTree.insert(firstNode);
    binarySearchTree.insert(secondNode);
    thirdNode = makeBinarySearchTree(5);
    fourthNode = makeBinarySearchTree(10);
    fifthNode = makeBinarySearchTree(12);
    sixthNode = makeBinarySearchTree(9);
    binarySearchTree.insert(thirdNode);
    binarySearchTree.insert(fourthNode);
    binarySearchTree.insert(fifthNode);
    binarySearchTree.insert(sixthNode);
    binarySearchTree.depthFirstLog(someCallBack);
    console.log(binarySearchTree);
    // newTree = makeBinarySearchTree(500000);
    // for (var i = 0; i < 1000000; i++){
    //   newTree.insert(makeBinarySearchTree(Math.floor(1000000 * Math.random())));
    // }
    // console.log(newTree.depthFirstLog(bsTreeSearch, 750000));
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });

  it("should be able to tell if a given node contains the passed in value for insert", function() {
    expect(binarySearchTree.contains(10)).toEqual(true);
    expect(binarySearchTree.contains(14)).toEqual(false);
    expect(binarySearchTree.contains(5)).toEqual(false);
    expect(binarySearchTree.contains(6)).toEqual(true);
  });

  it("should give the correct answer for .left and .right", function() {
    expect(fifthNode.right).toEqual(null);
    expect(fifthNode.left).toEqual(sixthNode);
    expect(fourthNode.right).toEqual(null);
    expect(fourthNode.left).toEqual(firstNode);
    expect(thirdNode.left).toEqual(null);
    expect(thirdNode.right).toEqual(null);
    expect(secondNode.right).toEqual(null);
    expect(secondNode.left).toEqual(null);
    expect(firstNode.left).toEqual(null);
    expect(firstNode.right).toEqual(fourthNode);
    expect(sixthNode.left).toEqual(null);
    expect(sixthNode.right).toEqual(fifthNode);
  });

  // add more tests here to test the functionality of binarySearchTree
});
