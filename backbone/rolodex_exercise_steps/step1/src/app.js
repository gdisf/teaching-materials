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

var person = new Person({
	firstName: "Grace",
    lastName: "Hopper",
    role: "Computer Scientist",
    imgUrl: "http://www.history.navy.mil/photos/images/h96000/h96920k.jpg"
});

// insert your new code here