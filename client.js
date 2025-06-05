const { Redis } = require("ioredis");
const client = new Redis();
module.exports = client;
//we will use this client to interact with our redis server
