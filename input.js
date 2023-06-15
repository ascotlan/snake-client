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
  } else if (move === "w") {
    connection.write("Move: up");
  } else if (move === "a") {
    connection.write("Move: left");
  } else if (move === "s") {
    connection.write("Move: down");
  } else if (move === "d") {
    connection.write("Move: right");
  } else if (move === "p") {
    connection.write("Say: You too slow!");
  } else if (move == "l") {
    connection.write("Say: You can't beat me!");
  } else {
    console.log(
      // output instruction to use on how to move
      `Press w to move up, a to move left, d to move right or s to move down. Press ctrl + c to exit game.`
    );
  }
};

module.exports = { setupInput };
