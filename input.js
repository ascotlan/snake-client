const { MESSAGE, MOVE } = require("./constants");

// Stores the active TCP connection object.
let connection;

//Stores status of socket connection
let end = false;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  //listen for when socket ended by server
  connection.on("end", () => {
    end = true;
  });

  return stdin;
};

const handleUserInput = function(input) {
  const key = input.toLowerCase(); //set all input to lowercase in case caps locks is enabled

  // \u0003 maps to ctrl+c input
  if (key === "\u0003") {
    process.exit();
  }

  //if message found and server didnt close socket send it to game server
  if (MESSAGE[key] && !end) {
    connection.write(MESSAGE[key]);
  }

  //if move valid and server didnt close socket send move to game server
  if (MOVE[key] && !end) {
    connection.write(MOVE[key]);
  }
};

module.exports = { setupInput };
