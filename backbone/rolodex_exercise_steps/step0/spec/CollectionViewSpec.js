describe("Exercise 3: ", function() {
  describe("Define a Backbone View of a Collection: ", function() {
    var myView;
    
    beforeEach(function() {
      myView = new RolodexView({
        collection: people
      });
    });

    it("store it as a variable called 'RolodexView'", function() {
      expect(RolodexView).not.toBeUndefined();
    });

    it("define a .render function", function() {
      expect(myView.render).toBeDefined();
    });

    it("make sure your .render function also returns this", function() {
      var newView = Backbone.View.extend();
      var returnExpectation = myView.render();
      expect(myView.__proto__.render).not.toEqual(newView.__proto__.render);
      expect(returnExpectation).toEqual(myView);
    });

    it("in the .initialize function, use .on() or .listenTo() to add an event listener for changes to the collection. The callback should be .render", function() {
      spyOn(RolodexView.prototype, 'render');
      var Collection = Backbone.Collection.extend();
      var myNewView = new RolodexView({
        collection: new Collection([
        { id: 1,
          firstName: 'Albert',
          lastName: 'Einstein'
        },
        {
          id: 2,
          firstName: 'Marie',
          lastName: 'Curie'
        }])
      });
      myNewView.collection.add({firstName: 'first', lastName: 'last', id: '1'})
      myNewView.collection.set({firstName: 'somethingElse', id: '1'})
      myNewView.collection.remove({id: '1'})
      expect(myNewView.render).toHaveBeenCalled();
    })
  });

  describe("Instantiate a new RolodexView: ", function() {
    it("store it as a variable called 'rolodexView'", function() {
      expect(rolodexView).toBeDefined();
    });

    it("give your instantiated view a collection. Use the people collection that you created before, or change it up.", function() {
      expect(rolodexView.collection).not.toBeUndefined();
    });
  });

  describe("Inside of your .render function ", function() {
    var source, template, myView;
    
    beforeEach(function() {
      myView = new RolodexView({
        collection: people
      });
    })

    it("compile the Handlebars template", function() {
      spyOn(Handlebars.helpers, 'each').and.callThrough();
      spyOn(Handlebars, 'compile').and.callThrough();

      myView.render();
      expect(Handlebars.compile).toHaveBeenCalled();
      expect(Handlebars.helpers.each).toHaveBeenCalled();
    })

    it("pass in JSON from the collection", function() {
      spyOn(Handlebars, 'compile').and.callThrough();
      myView.render();
      expect(Handlebars.compile).not.toHaveBeenCalledWith({});
    })

    it("append your rendered template to the view's $el", function() {
      myView.render();
      expect(myView.$el.children().length).toBeGreaterThan(0);
    })
  })

  describe("Update the $(document).ready() function ", function() {
    it("and instead of rendering and appending your personView to the DOM, render and append your rolodexView", function() {
      expect($('img').length).toBeGreaterThan(1);
    });
  });
});