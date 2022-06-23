const http = require('http');
http.createServer((req, res) => {
    console.log(`server started at PORT ${4500}`);
    res.write("Hello this sachin's first server");
    res.end();
}).listen(4500)


