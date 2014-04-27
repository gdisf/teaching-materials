describe("Exercise 3: ", function() {
  describe("Define a Backbone View of a Model: ", function() {
    var personView;

    beforeEach(function() {
      personView = new PersonView({
        model: model
      });
    });

    it("store it as a variable called 'PersonView'", function() {
      expect(PersonView).not.toBeUndefined();
    });

    it("give your PersonView a className of 'rolodex'", function() {
      expect(personView.$el.hasClass('rolodex')).toBe(true);
    });

    it("give your PersonView a className of 'thumbnail'", function() {
      expect(personView.$el.hasClass('thumbnail')).toBe(true);
    });

    it("give your PersonView a .render method that gets called upon instantiation", function() {
      spyOn(personView, 'render');
      personView.initialize();
      expect(personView.render).toHaveBeenCalled();
    });

    it("in .render, use jQuery to add an img tag to the $el", function() {
      expect(personView.$('img').length).toBeGreaterThan(0);
    })

    it("in .render, use jQuery to add an src attribute to the img", function() {
      expect(personView.$('img').attr('src')).toBeDefined();
    });

    it("use model.get('imgUrl') to populate the src tag", function() {
      expect(personView.$('img').attr('src')).toEqual(model.get('imgUrl'));
    })

    it("make sure your .render function returns this", function() {
      var returnExpectation = personView.render();
      expect(returnExpectation).toEqual(personView);
    });

    it("give your PersonView an event object, with an event for 'click'", function() {
      expect(personView.events).toBeDefined();
      expect(typeof personView.events).toEqual("object");
      expect(personView.events['click']).toBeDefined();
    });

    it("give that click event a callback called 'onClick'", function() {
      expect(personView.events['click']).toEqual('onClick');
    });

    it("make sure that 'onClick' is defined as a method on the PersonView", function() {
      expect(personView.onClick).toBeDefined();
      $('body').append(personView.$el);
      spyOn(personView, 'onClick');
      personView.delegateEvents();
      $('img').click();
      expect(personView.onClick).toHaveBeenCalled();
      personView.remove();
    });
  });

  describe("Instantiate a new PersonView: ", function() {
    it("store it as a variable called 'personView'", function() {
      expect(personView).toBeDefined();
    });

    it("give your instantiated view a model that you previously. You can either use the one provided, or create a new one. If you make a new model, make sure it has an 'imgUrl' attribute", function() {
      expect(personView.model).toBeDefined();
      expect(personView.model.get('imgUrl')).toBeDefined();
    });
  });

  describe("In app.js, listen for $(document).ready(): ", function() {

    it("and when the document is ready, append your personView to the DOM", function() {
      var myNode = $('img.thumbnail');
      expect(myNode.length).toBeGreaterThan(0);
    });
  });
});