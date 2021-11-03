const net = require('net');
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });

  const name = '~~~'


  conn.setEncoding('utf8'); // set encoding into english
  conn.on('connect', (data) => {  
    console.log('Success!');
    conn.write(`Name: ${name}`);
  });
   

  conn.on('data', (data) => { //get message back from server
    console.log('Server Sayz:', data)
  });
  return conn;
};

module.exports = { connect };