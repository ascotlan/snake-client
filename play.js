const { connect } = require("./client");

//listen for incoming data from the snake server
connect().on("data", (data) => {
  console.log(data);
});
