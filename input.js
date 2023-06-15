const { MESSAGE, MOVE } = require("./constants");

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  const move = key.toLowerCase(); //set all input to lowercase in case caps locks is enabled

  // \u0003 maps to ctrl+c input
  if (move === "\u0003") {
    process.exit();
  }

  //if message found send it to game
  if (MESSAGE[move]) {
    connection.write(MESSAGE[move]);
  }

  //if move valid send move to game
  if (MOVE[move]) {
    connection.write(MOVE[move]);
  }
};

module.exports = { setupInput };
