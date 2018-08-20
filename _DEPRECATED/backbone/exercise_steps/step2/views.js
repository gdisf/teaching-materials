var ChatMessagesView = Backbone.View.extend({
  initialize: function() {
    var source   = $("#chat-messages-template").html();
    this.template = Handlebars.compile(source);
  },
  render: function() {
    this.$el.html(this.template({messages: this.collection.toJSON()}));
    return this;
  }
});