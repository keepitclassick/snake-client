let connection;


const setupInput = (conn) => {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = (input) => {  ///press ctrl c to exit
    if ( input ===  '\u0003'){
      process.exit();
    }if ( input === 'w'){
      connection.write("Move: up");
    }if ( input === 'a'){
      connection.write("Move: left");
    }if ( input === 's'){
      connection.write("Move: down");
    }if ( input === 'd'){
      connection.write("Move: right");
    } if ( input === 'k') {
      connection.write("Say: Boop!")
    }
};


setupInput();

module.exports = {setupInput}