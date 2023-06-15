// setup interface to handle user input from stdin

// Stores the active TCP connection object.
let connection;

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
  const move = key.toLowerCase();
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
  } else {
    console.log(
      `Press w to move up, a to move left, d to move right or s to move down.`
    );
  }
};

module.exports = { setupInput };
