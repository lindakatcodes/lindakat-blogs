---
date: 2019-07-31T05:29:23.572Z
title: 100DaysOfCode R2D27 - Rockin' (Web)Sockets!
description: 'More Node learning - starting the chat app, & Socket.io!'
tags:
  - 100DaysOfCode
  - Node Course
---
I started the last project in my [Node course](https://www.udemy.com/the-complete-nodejs-developer-course-2/) - a chat app! I did the groundwork videos yesterday - getting libraries installed and new files/directories set up.

Tonight, I started getting into the actual code. For this project, the main library we're using is [Socket.io](socket.io), which has been really cool so far! It's got me learning a little bit about web sockets, which is a term I've heard before but haven't really paid attention to. 

To my understanding - web sockets are an upgrade to HTTP request/response patterns. They create a connection between a server and a client (or multiple clients!), and keep that connection open so that both sides can send data to each other even faster than you're able to with standard requests. I don't fully understand HOW it does this - just that it does. 

Socket.io builds on top of this, providing some nice API magic to make it even easier to work with web sockets. What's really been cool to me is that it's really centered around sending (emiting) custom events - so you can name your events anything you want! And then you can send along whatever data you want with it, and just set the other side to listen for that custom event. 

Let me share a simple example we worked on to play around with this. This will show us a basic counter, which when a button is clicked, will increment the counter and relay the new value to all the clients.

We started with an index.js file, which is running an Express app. This is our server file (the io word you see is the variable that's set to our server, which socket.io is controlling). In this file, we set up a variable for a counter, and then when a new client-side connection comes in, we send (emit) a little welcome message, and send over the current value of our count variable. 

```js
let count = 0;io.on('connection', (socket) => { socket.emit('countUpdated', count); })
```

The socket.emit phrase is the key - that's what send the data off to our client / browser side of things. 

So on our client, we set up a listener function that listens for the custom function name we just sent. When it detects that event being sent, it grabs the data that was sent along with it, and does something with it (in this example, just logs it to the console). (I should note - socket, in this instance, is also a variable defined in our file, which accesses the server we've got running.)

```js
socket.on('countUpdated', (count) => { console.log('The count has been updated!', count) })
```

So now, when we first connect, our server is calling an event and sending us the initial value of count, and our client is picking that event up and logging the value to the console. 

Then, if we click a button (which is set up in an html file) on the client side of things, we want to increase the value of count. So we grab the button click event in our client file, and fire off an event to our server that the button was clicked. 

```js
document.querySelector('#btnIncrease').addEventListener('click', () => { socket.emit('increment') })
```

Once our server detects this event, we then want to increase the value of count, and send that first event back with the new count value. (This takes place inside the io.on('connection') call we did earlier.)

```js
socket.on('increment', () => { count++; io.emit('countUpdated', count) })
```

And that's it! Now when we first open the browser to our site, we get a message with the initial count value. And each time we click the button on the page, we detect the button click, send an event to our server, add 1 to the counter, and send the new value back to the client! 

You might have noticed that sometimes I used socket.emit, and sometimes io.emit. There's 3 basic ideas / use cases that were introduced in the course:

* socket.emit - The socket keyword ties to a specific browser/client, so it'll send events only for that particular client.
* io.emit - Using the io keyword will send the events to all active, connected clients
* socket.broadcast.emit - This isn't in the examples above, but this will send an event to all connected clients EXCEPT the specific client you're in (we use this in the course for when a user logs in or out - you want others to see that a new user has joined or left, but you yourself don't need to see when you joined a chat!)

It's been really fun tonight, building out the core functionality for our app. It takes so little code to send and receive information on both ends of the app! It's boggling my mind. I'm excited to get back to it tomorrow, and keep working on this project! I already have ideas for how I'd like to use this information. :)
