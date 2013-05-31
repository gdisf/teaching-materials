var ChatMessage = Backbone.Model.extend({
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
    model: ChatMessage,
    comparator: function(message) {
        return message.get('time');
    }
});