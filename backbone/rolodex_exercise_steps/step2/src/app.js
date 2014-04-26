var Model = Backbone.Model.extend({
	defaults: {
		firstName: "",
		lastName: "",
		role: "student",
		imgUrl: "http://placekitten.com/200/200"
	},
	initialize: function() {
		this.generateUsername();
	},
	generateUsername: function () {
		var username = this.get('firstName') + this.get('lastName');
		this.set('username', username);
		return username;
	}
});

var Collection = Backbone.Collection.extend({
	model: Model,
	comparator: 'lastName',
	initialize: function() {
		var self = this;
		self.listenTo(self, 'add', self.sort)
	}
});

// you can use this model later on in the exercise
var model = new Model();

// insert your new code here
