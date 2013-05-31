var ChatRouter = Backbone.Router.extend({

  routes: {
    "room":            "room",
    "user/:id":        "profile"
  },

  room: function() {
    var chatMessages = new ChatMessages();
    var messagesView = new ChatMessagesView({collection: chatMessages, el: $('.chat-messages-wrapper')}).render();
    var formView = new ChatFormView({collection: chatMessages, el: $('.chat-form-wrapper')}).render();
  },

  profile: function(id) {
    $('body').append('This isnt implemented yet!');
  }

});