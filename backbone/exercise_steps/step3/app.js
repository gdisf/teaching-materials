var testMessages = [
  {author: 'Pamela', text: 'My second message', time: (new Date()).getTime()-50},
  {author: 'Pamela', text: 'My first message', time: (new Date()).getTime()-100},
  {author: 'Pamela', text: 'My third message', time: (new Date()).getTime()}
];
var chatMessages = new ChatMessages(testMessages);
var messagesView = new ChatMessagesView({collection: chatMessages, el: $('.chat-messages-wrapper')}).render();
var formView = new ChatFormView({collection: chatMessages, el: $('.chat-form-wrapper')}).render();