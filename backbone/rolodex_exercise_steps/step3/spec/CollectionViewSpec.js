describe("Exercise 4: ", function() {
  describe("Define a Backbone View of a Collection: ", function() {
    var myView;
    

    beforeEach(function() {
      $('body').append($('<script id="rolodex-template" type="text/x-handlebars-template">'));
      var source   = $("#rolodex-template").html();
      var template = Handlebars.compile(source);
      
      myView = new RolodexView({
        collection: collection
      });
    });

    afterEach(function() {
      $('#rolodex-template').remove();
    })

    it("store it as a variable called 'RolodexView'", function() {
      expect(View).not.toBeUndefined();
    });

    it("define a .render function", function() {
      expect(myView.render).toBeDefined();
    });

    it("make sure your .render function returns this", function() {
      var returnExpectation = myView.render();
      expect(returnExpectation).toEqual(myView);
    });

    it("inside of your .render function, compile a Handlebars template", function() {
      spyOn(Handlebars, 'compile');
      myView.render();
      expect(Handlebars.compile).toHaveBeenCalled();
      expect(Handlebars.compile).toHaveBeenCalledWith($("#rolodex-template").html());
    })

    it("inside of your .render function, pass JSON into a Handlebars template using collection.toJSON", function() {
      expect(template(collection.toJSON())).not.toThrow();
    });

    it("inside of your .render function, append the rendered template to your $el", function() {
      expect(myView.$el.children().length).toBeGreaterThan(0);
    })

    it("inside of your .render function, don't forget to return this", function() {
      var returnExpectation = myView.render();
      expect(returnExpectation).toEqual(myView);
    })

    it("in .initialize, create an event listener for the 'reset' event with a callback of .render", function() {
      spyOn(myView,'render');
      myView.collection.trigger('reset');
      expect(myView.render).toHaveBeenCalled();
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