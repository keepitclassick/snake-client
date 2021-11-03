const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '165.227.47.243',
    port: '50541'
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