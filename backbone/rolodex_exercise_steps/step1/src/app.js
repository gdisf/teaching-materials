var areGirlDevelopersCool = true;

var Person = Backbone.Model.extend({
	defaults: {
		role: 'student',
		imgUrl: 'http://placekitten.com/200/200',
		firstName: '',
		lastName: ''
	},
	generateUsername: function() {
		var username = this.get('firstName') + this.get('lastName');
		this.set('username', username)
		return username;
	},
	initialize: function() {
		this.generateUsername();
	}
});

// insert your new code here