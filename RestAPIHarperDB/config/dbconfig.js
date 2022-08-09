const harperive = require("harperive");

const DB_CONFIG = {
  harperHost: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  token: process.env.OPERATION_TOKEN, // pass either username/password or token
  schema: process.env.SCHEMA, // optional params
};

const Client = harperive.Client;
const client = new Client(DB_CONFIG);

// function call with callback
module.exports = client;
