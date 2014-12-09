var areGirlDevelopersCool = true;

var Person = Backbone.Model.extend({
	defaults: {
		role: 'student',
		imgUrl: 'http://placepuppy.it/200/200',
		firstName: '',
		lastName: ''
	},
	generateUserName: function() {
		var userName = this.get('firstName') + this.get('lastName');
		this.set('userName', userName)
		return userName;
	},
	initialize: function() {
		this.generateUserName();
	}
});

// insert your new code here