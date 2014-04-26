describe("Define a Backbone Model", function() {
  var model;

  beforeEach(function() {
    model = new Model();
  });

  it("store it as a variable called 'Model'", function() {
    expect(Model).not.toBeUndefined();
  });

  describe("give it some defaults", function() {
    it("such as a 'role' attribute that equals 'student'", function() {
      expect(model.defaults.role).toBeDefined();
      expect(model.defaults.role).toEqual("student");
    });

    it("such as a 'imgUrl' attribute that equals 'http://placekitten.com/200/200'", function() {
      expect(model.defaults.imgUrl).toBeDefined();
      expect(model.defaults.imgUrl).toEqual("http://placekitten.com/200/200");
    });

    it("such as a 'firstName' attribute that equals an empty string ''", function() {
      expect(model.defaults.firstName).toBeDefined();
      expect(model.defaults.firstName).toEqual('');
    });

    it("such as a 'lastName' attribute that equals an empty string ''", function() {
      expect(model.defaults.lastName).toBeDefined();
      expect(model.defaults.lastName).toEqual('');
    });
  });

  describe("give it some custom methods", function() {
    it("such as a method called 'generateUsername'", function() {
      expect(model.generateUsername).toBeDefined();
    });

    it("'generateUsername' should return a concatenated string of the 'firstName' and 'lastName'", function() {
      var username;
      model = new Model({firstName: "Brenda", lastName: "Jin"});
      username = model.generateUsername();
      expect(username).toEqual("BrendaJin");
    })

    it("'generateUsername' should also set the 'username' property of the Model", function() {
      model = new Model({firstName: "Brenda", lastName: "Jin"});
      username = model.generateUsername();
      expect(model.get('username')).toBeDefined();
      expect(model.get('username')).toEqual('BrendaJin');
    })

    it("'generateUsername' should get called whenever a new Model is instantiated", function() {
      spyOn(model, 'generateUsername');
      model.initialize();
      expect(model.generateUsername).toHaveBeenCalled();
    });
  });
});

