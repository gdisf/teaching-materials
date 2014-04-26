describe("Define a Backbone View", function() {
  var myView;

  beforeEach(function() {
    myView = new View({
      model: model
    });
  });

  it("store it as a variable called 'View'", function() {
    expect(View).not.toBeUndefined();
  });

  it("give your View a tagName of 'img'", function() {
    expect(myView.$el.prop('tagName')).toBe('IMG');
  });

  it("give your View a className of 'thumbnail'", function() {
    expect(myView.$el.hasClass('thumbnail')).toBe(true);
  });

  it("give your View a .render method that adds an src attribute to View.$el", function() {
    spyOn(myView, 'render');
    myView.initialize();
    expect(myView.render).toHaveBeenCalled();
  });

  it("call .render when your view is instantiated", function() {
    expect(myView.$el.attr('src')).toBeDefined();
  });

  it("make sure your .render function returns this", function() {
    var returnExpectation = myView.render();
    expect(returnExpectation).toEqual(myView);
  });

  it("give your View an event object, with an event for 'click'", function() {
    expect(myView.events).toBeDefined();
    expect(typeof myView.events).toEqual("object");
    expect(myView.events['click']).toBeDefined();
  });

  it("give that click event a callback called 'onClick'", function() {
    expect(myView.events['click']).toEqual('onClick');
  });

  it("make sure that 'onClick' is defined as a method on the View", function() {
    expect(myView.onClick).toBeDefined();
    $('body').append(myView.$el);
    spyOn(myView, 'onClick');
    myView.delegateEvents();
    $('img').click();
    expect(myView.onClick).toHaveBeenCalled();
    myView.remove();
  });
});

describe("Instantiate a new View", function() {
  it("store it as a variable called 'view'", function() {
    expect(view).toBeDefined();
  });

  it("give your instantiated view a model. You can either use the one provided, or create a new one. If you make a new model, make sure it has an 'imgUrl' attribute", function() {
    expect(view.model).toBeDefined();
    expect(view.model.get('imgUrl')).toBeDefined();
  });
});

describe("Listen for $(document).ready()", function() {

  it("and when the document is ready, append your view to the DOM", function() {
    var myNode = $('img.thumbnail');
    expect(myNode.length).toBeGreaterThan(0);
  });
});