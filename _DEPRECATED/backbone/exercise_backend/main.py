#!/usr/bin/env python
import datetime
from google.appengine.ext import db
from google.appengine.ext import webapp
from google.appengine.ext.webapp import util
import simplejson


# the chat message model
class ChatMessage(db.Model):
    text = db.StringProperty()
    time = db.DateTimeProperty()
    author = db.StringProperty()

    def to_dict(self):
        return {
            "id": self.key().id(),
            "text": self.text,
            "time": self.time.strftime("%s"),
            "author": self.author
        }


# the chat messages handler
class ChatMessagesHandler(webapp.RequestHandler):

    def add_cors(self):
        self.response.headers.add_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.response.headers.add_header("Access-Control-Allow-Headers", "origin, x-requested-with, content-type, accept")
        self.response.headers.add_header("Access-Control-Allow-Origin", "*")

    def options(self):
        self.add_cors()
        self.response.out.write("")

    # get all
    def get(self):
        # serialize all Todos, include the ID in the response
        messages = []
        for message in ChatMessage.all():
            messages.append(message.to_dict())
        # send them to the client as JSON
        self.add_cors()
        self.response.headers.add_header('Content-Type', 'application/json')
        self.response.out.write(simplejson.dumps(messages))

    # create one
    def post(self):
        # load the JSON data of the new object
        data = simplejson.loads(self.request.body)

        time = data['time']
        if time:
            time = datetime.datetime.fromtimestamp(int(time)/1000)
        else:
            time = datetime.datetime.now()
        # create the todo item
        message = ChatMessage(
            text=data["text"],
            time=time,
            author=data["author"],
        )
        message.put()

        # send it back, and include the new ID.
        self.add_cors()
        self.response.headers.add_header('Content-Type', 'application/json')
        self.response.out.write(simplejson.dumps(message.to_dict()))


def main():
    application = webapp.WSGIApplication([
        ('/messages', ChatMessagesHandler)
    ], debug=True)
    util.run_wsgi_app(application)


if __name__ == '__main__':
    main()
