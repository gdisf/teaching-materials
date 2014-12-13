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

var People = Backbone.Collection.extend({
	model: Person,
	comparator: function(model) {
		return model.get('lastName').toLowerCase();
	}
});

var people = new People([
	{
		firstName: "Brenda",
		lastName: "Jin",
		role: "teacher",
		imgUrl: "https://pbs.twimg.com/profile_images/494918967329165312/_DNh8TnK.jpeg"
	},
	{
		firstName: "Pamela",
		lastName: "Fox",
		role: "teacher",
		imgUrl: "https://pbs.twimg.com/profile_images/458674563044233216/Rya_AmpS.jpeg"
	},
	{
		lastName: "Djaja",
		role: "TA",
		imgUrl: "https://lh6.googleusercontent.com/-RXfQUhzv7uQ/AAAAAAAAAAI/AAAAAAAAAAA/vO3ax0T-UzY/s128-c-k/photo.jpg"
	}
]);

people.add({
	firstName: 'Julee',
	lastName: 'Burdekin',
	role: 'Adobe host'
});

// insert your new code here
