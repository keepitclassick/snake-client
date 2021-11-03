const connect = require('./client');
const net = require('net');

// setup interface to handle user input from stdin

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = (input) => {  ///press ctrl c to exit
    if (input ===  '\u0003'){
      process.exit();
}};

setupInput(handleUserInput);