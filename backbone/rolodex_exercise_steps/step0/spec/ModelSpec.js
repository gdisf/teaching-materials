describe("Exercise 0: ", function() {
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
      it("such as a method called 'generateUserName'", function() {
        expect(person.generateUserName).toBeDefined();
      });

      it("'generateUserName' should return a concatenated string of the 'firstName' and 'lastName' with no spaces in between", function() {
        var username;
        person = new Person({firstName: "Brenda", lastName: "Jin"});
        userName = person.generateUserName();
        expect(userName).toEqual("BrendaJin");
      })

      it("'generateUserName' should also set the 'userName' property of the Person. The value of 'userName' should be the same value as the 'generateUserName' method returns.", function() {
        person = new Person({firstName: "Brenda", lastName: "Jin"});
        userName = person.generateUserName();
        expect(person.get('userName')).toBeDefined();
        expect(person.get('userName')).toEqual('BrendaJin');
      })

      it("'generateUserName' should get called whenever a new Person is instantiated", function() {
        spyOn(person, 'generateUserName');
        person.initialize();
        expect(person.generateUserName).toHaveBeenCalled();
      });
    });
  });
});