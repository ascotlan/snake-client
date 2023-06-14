const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: AKS");
  });

  return conn;
};

console.log("Connecting ...");

//listen for incoming data from the snake server
connect().on("data", (data) => {
  console.log(data);
});

module.exports = { connect };
