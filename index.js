const EventEmitter = require('events');

const emitter = new EventEmitter();

// register a listener for bellRing event
emitter.on('bellRing', (period) => {
    console.log(`We need to run! ${period}`);
});

// raise an event
emitter.emit('bellRing', 'second period ended');
