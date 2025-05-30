// 
const { EventEmitter } = require('events'); // Correct import
const url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
  log(message) {
    // Send an HTTP request (this is a placeholder)
    console.log(message);

    // Emit the 'messegelogged' event with a message object
    this.emit('messegelogged', { id: 1, name: 'jensi', url: 'http://myevent.org/log' });
  }
}
module.exports = Logger;
