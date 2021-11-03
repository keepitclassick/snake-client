const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '165.227.47.243',
    port: '50541'
  });
  const name = '~~~'
  const client = net.createConnection({host: '165.227.47.243', port: 50541});
  conn.setEncoding('utf8'); // set encoding into english

  conn.on('connect', (data) => {  
    console.log('Success!');
    client.write(`Name: ${name}`);
    client.write('Move: up');

  conn.on('data', (data) => { //get message back from server
    console.log('Server Sayz:', data)
  });

 

};
connect();

module.exports = 'connect';