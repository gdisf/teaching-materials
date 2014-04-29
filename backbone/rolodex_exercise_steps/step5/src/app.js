var Person = Backbone.Model.extend({
	defaults: {
		firstName: "",
		lastName: "",
		role: "student",
		imgUrl: "http://placekitten.com/200/200"
	},
	urlRoot: 'http://spacodemo.herokuapp.com/person',
	initialize: function() {
		this.generateUsername();
	},
	generateUsername: function () {
		var username = this.get('firstName') + this.get('lastName');
		this.set('username', username);
		return username;
	}
});

var People = Backbone.Collection.extend({
	model: Person,
	url: 'http://spacodemo.herokuapp.com/people',
	comparator: 'lastName',
	initialize: function() {
		this.listenTo(this, 'add', this.sort)
	}
});

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
]);

people.add({
	firstName: "Grace",
	lastName: "Hopper",
	role: "Computer Scientist",
	imgUrl: "http://www.primerlabs.com/sites/default/files/gracehopper_0.jpg"
})

var person = new Person({
	firstName: "Anita",
	lastName: "Borg",
	id: '202828777d7d7dj3m2k2k',
	role: "Computer Scientist",
	imgUrl: "http://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Anita_Borg.jpg/220px-Anita_Borg.jpg"
})

people.add(person);

person.save();

var PersonView = Backbone.View.extend({
	className: 'rolodex',
	events: {
		'click' : 'onClick'
	},
	render: function() {
		var myImg = $('<img>');
		var imgSrc = this.model.get('imgUrl');
		
		myImg.attr('src', imgSrc);
		this.$el.append(myImg);

		return this;
	},
	onClick: function() {

	}
})

var personView = new PersonView({
	model: person
})

var RolodexView = Backbone.View.extend({
	urlRoot: 'http://spacodemo.herokuapp.com/people',
	initialize: function() {
		this.listenTo(this.collection, 'reset', this.render)
	},
	render: function() {
		var source   = $("#rolodex-template").html();
		var template = Handlebars.compile(source);
		var rendered = template({people: this.collection.toJSON()});
		this.$el.append(rendered);
		return this;
	}
})

var rolodexView = new RolodexView({
	collection: people
})

$(document).ready(function() {
	people.fetch();
	$('body').append(rolodexView.render().$el);
	// $('body').append(personView.render().$el);
	// the personView was commented out so that the collection could be rendered instead
})