describe("Exercise 0: ", function() {
  describe("Create a Backbone Model: ", function() {
    var myPerson;

    beforeEach(function() {
      myPerson = new Person();
    });

    it("store it as a variable called 'Person'", function() {
      expect(Person).not.toBeUndefined();
    });

    describe("give it some defaults", function() {
      it("such as a 'role' attribute that equals 'student'", function() {
        expect(myPerson.defaults.role).toBeDefined();
        expect(myPerson.defaults.role).toEqual("student");
      });

      it("such as a 'imgUrl' attribute that equals 'http://placepuppy.it/200/200'", function() {
        expect(myPerson.defaults.imgUrl).toBeDefined();
        expect(myPerson.defaults.imgUrl).toEqual("http://placepuppy.it/200/200");
      });

      it("such as a 'firstName' attribute that equals an empty string ''", function() {
        expect(myPerson.defaults.firstName).toBeDefined();
        expect(myPerson.defaults.firstName).toEqual('');
      });

      it("such as a 'lastName' attribute that equals an empty string ''", function() {
        expect(myPerson.defaults.lastName).toBeDefined();
        expect(myPerson.defaults.lastName).toEqual('');
      });
    });

    describe("give it some custom methods", function() {
      it("such as a method called 'generateUserName'", function() {
        expect(myPerson.generateUserName).toBeDefined();
      });

      it("'generateUserName' should return a concatenated string of the 'firstName' and 'lastName' with no spaces in between", function() {
        var username;
        myPerson = new Person({firstName: "Brenda", lastName: "Jin"});
        userName = myPerson.generateUserName();
        expect(userName).toEqual("BrendaJin");
      })

      it("'generateUserName' should also set the 'userName' property of the Person. The value of 'userName' should be the same value as the 'generateUserName' method returns.", function() {
        myPerson = new Person({firstName: "Brenda", lastName: "Jin"});
        userName = myPerson.generateUserName();
        expect(myPerson.get('userName')).toBeDefined();
        expect(myPerson.get('userName')).toEqual('BrendaJin');
      })

      it("'generateUserName' should get called whenever a new Person is instantiated", function() {
        spyOn(myPerson, 'generateUserName');
        myPerson.initialize();
        expect(myPerson.generateUserName).toHaveBeenCalled();
      });
    });
  });
    
  describe("Instantiate a Backbone Model", function() {
    it("store it as a variable called person", function() {
      expect(person).toBeDefined();
    });
  });
});