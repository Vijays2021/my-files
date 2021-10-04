const events = require('events');

const eventsEmitter = new events.EventEmitter();

eventsEmitter.on('userLoggedIn', (user) =>{
    console.log(user + " Logged in successfully");
});

eventsEmitter.on('userLoggedOut', (username) =>{
    console.log(username + " Logged out successfully");
});

eventsEmitter.emit("userLoggedIn", "Vijay");
eventsEmitter.emit("userLoggedOut", "Sakthi");