var chatMessages = new ChatMessages();
var messagesView = new ChatMessagesView({collection: chatMessages, el: $('.chat-messages-wrapper')}).render();
var formView = new ChatFormView({collection: chatMessages, el: $('.chat-form-wrapper')}).render();