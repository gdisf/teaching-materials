describe("Define a Backbone Collection", function() {
  var collection;

  beforeEach(function() {
    collection = new Collection({
      model: Model
    });
    spyOn(collection, 'add');
    spyOn(collection, 'sort');
  });

  it("store it as a variable called 'Collection'", function() {
    expect(Collection).not.toBeUndefined();
  });

  it("set the model class to 'Model'", function() {
    expect(collection.models[0].get('imgUrl')).toBeDefined();
    expect(collection.models[0].get('lastName')).toBeDefined();
    expect(collection.models[0].get('firstName')).toBeDefined();
  });

  it("give it a comparator of 'lastName'", function() {
    expect(collection.comparator).toEqual("lastName");
  });
});