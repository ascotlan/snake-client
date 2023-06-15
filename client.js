const net = require("net");
const { IP, PORT, PLAYER } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //upon a succesful connection print status and send player name to the server
  conn.on("connect", () => {
    console.log("Connected...");
    conn.write(PLAYER);
  });

  //listen for incoming data from the snake server
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };
