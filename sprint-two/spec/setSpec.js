describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it("should be able to add and check str", function() {
    set.add("This string is now in the set");
    expect(set.contains("This string is now in the set")).toEqual(true);
    set.remove("This string is now in the set");
    expect(set.contains("This string is now in the set")).toEqual(false);
  });


});
