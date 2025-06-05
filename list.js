const client = require("./client");
async function init() {
  const result = await client.lpush("messages", "1");
}
init();
