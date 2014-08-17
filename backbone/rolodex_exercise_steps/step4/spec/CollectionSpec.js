describe("Exercise 1: ", function() {
  describe("Define a Backbone Collection: ", function() {
    var people;

    beforeEach(function() {
      people = new People({
        model: Person
      });
      spyOn(people, 'add');
      spyOn(people, 'sort');
    });

    it("store it as a variable called 'People'", function() {
      expect(People).not.toBeUndefined();
    });

    it("set the model class to 'Person'", function() {
      expect(people.models[0].get('imgUrl')).toBeDefined();
      expect(people.models[0].get('lastName')).toBeDefined();
      expect(people.models[0].get('firstName')).toBeDefined();
    });

    it("the comparator method to sort by the lowercase value of 'lastName'", function() {
      var returnValue = people.comparator(new Person({lastName: 'Jin'}))
      expect(returnValue).toEqual("jin");
    });
  });

  describe("Instantiate a new Collection : ", function() {
    it("store it as a variable called 'people'", function() {
      expect(people).toBeDefined();
    });

    it("add at least three models to it, and give them unique last names", function() {
      expect(people.length).toBeGreaterThan(2);
      expect(people.models[0].get('lastName')).not.toEqual(people.models[1].get('lastName'))
      expect(people.models[0].get('lastName')).not.toEqual(people.models[2].get('lastName'))
      expect(people.models[1].get('lastName')).not.toEqual(people.models[2].get('lastName'))
    })
  });

  describe("Add some more models: ", function(){
    beforeEach(function() {
      spyOn(people, 'sort');
    });

    it("use .add to add at least 1 more model", function() {
      expect(people.length).toBeGreaterThan(3);
    });
  });
});