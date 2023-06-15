const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

const conn = connect();

//pass the connection object tot he input handler
setupInput(conn);
