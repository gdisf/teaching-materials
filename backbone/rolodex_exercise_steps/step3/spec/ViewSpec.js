describe("Define a Backbone View", function() {
  var myView;

  beforeEach(function() {
    $('body').append($('<div id="view-anchor">'));

    myView = new View({
      collection: collection,
      el: '#view-anchor'
    });
  });

  afterEach(function() {
    myView.remove();
  })

  it("store it as a variable called 'View'", function() {
    expect(View).not.toBeUndefined();
  });

  it("call .render when your view is instantiated", function() {
    spyOn(myView, 'render');
    myView.initialize();
    expect(myView.render).toHaveBeenCalled();
  });

  it("make sure your .render function returns this", function() {
    var returnExpectation = myView.render();
    expect(returnExpectation).toEqual(myView);
  });

  it("inside of your .render function, pass JSON into a Handlebars template using collection.toJSON", function() {
    spyOn(Handlebars, 'thumb');
    myView.render();
    expect(Handlebars.thumb).toHaveBeenCalled();
    expect(Handlebars.thumb).toHaveBeenCalledWith(myView.collection.toJSON());
  });

  it("inside of your .render function, append the rendered template to your $el", function() {
    expect(myView.$el.children().length).toBeGreaterThan(0);
  })
});

describe("Instantiate a new View", function() {
  it("store it as a variable called 'view'", function() {
    expect(view).toBeDefined();
  });

  it("give your instantiated view a collection. You can either use the one provided called 'collection', or create a new one.", function() {
    expect(view.collection).not.toBeUndefined();
  });
  
});