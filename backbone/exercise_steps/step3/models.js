var ChatMessage = Backbone.Model.extend({
    defaults: {
        author: 'Unknown',
        text: '',
        time: (new Date()).getTime()
    },
    getPurified: function() {
       // Worst purification method ever
       // See: http://www.codinghorror.com/blog/2008/10/obscenity-filters-bad-idea-or-incredibly-intercoursing-bad-idea.html
       var purifiedString = this.get('text').replace(/shit|damn|crap/, '****');
       this.set('text', purifiedString);
       return purifiedString;
    },
    initialize: function() {
      this.getPurified();
    }
});

var ChatMessages = Backbone.Collection.extend({
    model: ChatMessage,
    comparator: function(message) {
        return message.get('time');
    }
});