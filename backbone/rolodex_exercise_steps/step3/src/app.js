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

var People = Backbone.Collection.extend({
	model: Person,
	comparator: function(model) {
		return model.get('lastName').toLowerCase();
	}
})

var people = new People([
	{
		firstName: "Brenda",
		lastName: "Jin",
		role: "teacher",
		imgUrl: "https://pbs.twimg.com/profile_images/378800000767548355/a8e51504bab0789d2b3ba7d6329aaf8c.jpeg"
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
])

people.add({
	firstName: 'Julee',
	lastName: 'Burdekin',
	role: 'Adobe host'
})

var PersonView = Backbone.View.extend({
	className: 'rolodex',
	render: function() {
		var myImg = $('<img>').attr('src', this.model.get('imgUrl'));
		this.$el.append(myImg);
		return this;
	},
	events: {
		'click': 'onClick'
	},
	onClick: function() {
		// do something cool here
	}
});

var person = new Person({
	firstName: "Grace",
    lastName: "Hopper",
    role: "Computer Scientist",
    imgUrl: "http://www.history.navy.mil/photos/images/h96000/h96920k.jpg"
})

var personView = new PersonView({
	model: person
});

// insert new code here

$(document).ready(function() {
	$('body').append(personView.render().$el);
})

