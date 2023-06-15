const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

const conn = connect();

//pass the connection object to the input handler
setupInput(conn);
