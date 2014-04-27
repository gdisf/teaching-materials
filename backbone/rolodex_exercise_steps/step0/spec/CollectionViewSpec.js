describe("Exercise 4: ", function() {
  describe("Define a Backbone View of a Collection: ", function() {
    var myView;
    

    beforeEach(function() {
      $('body').append($('<script id="rolodex-template" type="text/x-handlebars-template">'));
      var source   = $("#rolodex-template").html();
      var template = Handlebars.compile(source);

      myView = new RolodexView({
        collection: people
      });
    });

    afterEach(function() {
      $('#rolodex-template').remove();
    })

    it("store it as a variable called 'RolodexView'", function() {
      expect(RolodexView).not.toBeUndefined();
    });

    it("define a .render function", function() {
      expect(myView.render).toBeDefined();
    });

    it("make sure your .render function returns this", function() {
      var returnExpectation = myView.render();
      expect(returnExpectation).toEqual(myView);
    });

  });

  describe("Instantiate a new RolodexView: ", function() {
    it("store it as a variable called 'rolodexView'", function() {
      expect(rolodexView).toBeDefined();
    });

    it("give your instantiated view a collection. Use the people collection that you created before, or change it up.", function() {
      expect(rolodexView.collection).not.toBeUndefined();
    });
    
  });
});