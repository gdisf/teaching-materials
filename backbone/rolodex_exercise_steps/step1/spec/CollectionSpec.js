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

describe("Instantiate a new Collection", function() {
  it("store it as a variable called 'collection'", function() {
    expect(collection).toBeDefined();
  });

  it("add at least three models to it, and give them unique last names", function() {
    expect(collection.length).toBeGreaterThan(2);
    expect(collection.models[0].get('lastName')).not.toEqual(collection.models[1].get('lastName'))
    expect(collection.models[0].get('lastName')).not.toEqual(collection.models[2].get('lastName'))
    expect(collection.models[1].get('lastName')).not.toEqual(collection.models[2].get('lastName'))
  })
});

describe("Add some more models", function(){
  beforeEach(function() {
    spyOn(collection, 'sort');
  });

  it("use .add to add at least 2 more models", function() {
    expect(collection.length).toBeGreaterThan(4);
  });

  it("and now call .sort() every time a new model is added", function() {
    collection.add({firstName: "Grace", lastName: "Hopper"});
    expect(collection.sort).toHaveBeenCalled();
  });
});