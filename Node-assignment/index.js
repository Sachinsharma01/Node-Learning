const PORT = 8080;
const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    console.log(`server started at PORT ${PORT}`);

    if (req.method === "GET") {
    const data = fs.readFileSync("./assets/text.json");
    const responseData = JSON.parse(data);

    fs.writeFileSync("data.txt", JSON.stringify(responseData));
    res.end(JSON.stringify(responseData));
    }
  })
  .listen(PORT);
