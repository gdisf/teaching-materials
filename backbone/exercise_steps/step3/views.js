var ChatMessagesView = Backbone.View.extend({
  initialize: function() {
    var source   = $("#chat-messages-template").html();
    this.template = Handlebars.compile(source);
    this.collection.bind('add', this.render, this);
  },
  render: function() {
    this.$el.html(this.template({messages: this.collection.toJSON()}));
    return this;
  }
});

var ChatFormView = Backbone.View.extend({
  events: {
    'click button[type=submit]': 'sendChat'
  },
  initialize: function() {
    var source   = $("#chat-form-template").html();
    this.template = Handlebars.compile(source);
  },
  render: function() {
    this.$el.html(this.template({messages: this.collection.toJSON()}));
    return this;
  },
  sendChat: function(e) {
    e.preventDefault();
    this.collection.add({
      author: 'pamela',
      text: this.$('input').val(),
      time: (new Date()).getTime()});
  }
});