const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}


const myEmitter = new MyEmitter();
// Only do this once so we don't loop forever
myEmitter.once('newListener', (event, listener) => {
    console.log(event)
    if (event === 'event') {
        // Insert a new listener in front
        myEmitter.on('event', () => {
            console.log('A');
        });
    }
});

myEmitter.on('event', () => {
    console.log('B');
});

myEmitter.on('banjo', () => {
    console.log('C');
});

myEmitter.emit('event');
myEmitter.emit('banjo');

// Prints:
//   B
//   A