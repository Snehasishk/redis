const client = require("./client");
async function init() {
  await client.set("msg:5", "hello from nodejs");
  const result1 = await client.get("msg:3");
  const result2 = await client.get("msg:5");
  console.log("Result1 -> ", result1);
  console.log("Result 2-> ", result2);
}
init();
