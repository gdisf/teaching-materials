describe("Exercise 1: ", function() {
  describe("Create a Backbone Model: ", function() {
    var person;

    beforeEach(function() {
      person = new Person();
    });

    it("store it as a variable called 'Person'", function() {
      expect(Person).not.toBeUndefined();
    });

    describe("give it some defaults", function() {
      it("such as a 'role' attribute that equals 'student'", function() {
        expect(person.defaults.role).toBeDefined();
        expect(person.defaults.role).toEqual("student");
      });

      it("such as a 'imgUrl' attribute that equals 'http://placekitten.com/200/200'", function() {
        expect(person.defaults.imgUrl).toBeDefined();
        expect(person.defaults.imgUrl).toEqual("http://placekitten.com/200/200");
      });

      it("such as a 'firstName' attribute that equals an empty string ''", function() {
        expect(person.defaults.firstName).toBeDefined();
        expect(person.defaults.firstName).toEqual('');
      });

      it("such as a 'lastName' attribute that equals an empty string ''", function() {
        expect(person.defaults.lastName).toBeDefined();
        expect(person.defaults.lastName).toEqual('');
      });
    });

    describe("give it some custom methods", function() {
      it("such as a method called 'generateUsername'", function() {
        expect(person.generateUsername).toBeDefined();
      });

      it("'generateUsername' should return a concatenated string of the 'firstName' and 'lastName'", function() {
        var username;
        person = new Person({firstName: "Brenda", lastName: "Jin"});
        username = person.generateUsername();
        expect(username).toEqual("BrendaJin");
      })

      it("'generateUsername' should also set the 'username' property of the Person", function() {
        person = new Person({firstName: "Brenda", lastName: "Jin"});
        username = person.generateUsername();
        expect(person.get('username')).toBeDefined();
        expect(person.get('username')).toEqual('BrendaJin');
      })

      it("'generateUsername' should get called whenever a new Person is instantiated", function() {
        spyOn(person, 'generateUsername');
        person.initialize();
        expect(person.generateUsername).toHaveBeenCalled();
      });
    });
  });
});