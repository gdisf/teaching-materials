var ChatMessagesView = Backbone.View.extend({
  initialize: function() {
    var source   = $("#chat-messages-template").html();
    this.template = Handlebars.compile(source);
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'reset', this.render);
    this.collection.fetch();

    // polling
    var self = this;
    window.setInterval(function() {
      self.collection.fetch();
    }, 5000);
  },
  render: function() {
    this.$el.html(this.template({messages: this.collection.toJSON()}));
    return this;
  }
});

var ChatFormView = Backbone.View.extend({
  events: {
    'click button[type=submit]': 'sendChat',
    'click button[type=button]': 'refreshChats'
  },
  initialize: function() {
    var source   = $("#chat-form-template").html();
    this.template = Handlebars.compile(source);
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  },
  sendChat: function(e) {
    e.preventDefault();
    this.collection.create({
      author: 'pamela',
      text: this.$('input').val(),
      time: (new Date()).getTime()/1000});
  },
  refreshChats: function(e) {
    this.collection.fetch();
  }
});