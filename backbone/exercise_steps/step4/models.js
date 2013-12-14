var ChatMessage = Backbone.Model.extend({
    url: 'http://backchat-backend.appspot.com/messages',
    defaults: {
        author: 'Unknown',
        text: '',
        time: (new Date()).getTime()
    },
    getPurified: function() {
       // Worst purification method ever
       // See: http://www.codinghorror.com/blog/2008/10/obscenity-filters-bad-idea-or-incredibly-intercoursing-bad-idea.html
       return this.get('text').replace(/shit|damn|crap/, '****');
    }
});

var ChatMessages = Backbone.Collection.extend({
    url: 'http://backchat-backend.appspot.com/messages',
    model: ChatMessage,
    comparator: function(message) {
        return message.get('time');
    }
});