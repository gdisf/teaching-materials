var ChatMessage = Backbone.Model.extend({
    url: 'http://localhost:8080/messages',
    defaults: {
        author: 'Unknown',
        text: ''
    },
    getPurified: function() {
       // Worst purification method ever
       // See: http://www.codinghorror.com/blog/2008/10/obscenity-filters-bad-idea-or-incredibly-intercoursing-bad-idea.html
       return this.get('text').replace(/shit|damn|crap/, '****');
    }
});

var ChatMessages = Backbone.Collection.extend({
    url: 'http://localhost:8080/messages',
    model: ChatMessage,
    comparator: function(message) {
        return message.get('time');
    }
});