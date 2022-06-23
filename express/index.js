const express = require("express");
const path = require("path"); //! path gets the path of file or folder

const renderHtmlPath = path.join(__dirname, "/html/renderHtml.html"); //! acces the path of folder

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/help", (req, res) => {
  res.send("Help Page");
}); 

app.get("/dataRequest", (req, res) => {
  console.log(req.query);
  res.send("USER REQUEST DATA");
});

app.get("/renderHtml", (req, res) => {
  res.send("<h1>Hello from Express</h1>");
});

app.get("/renderHtmlFile", (req, res) => {
  res.sendFile(renderHtmlPath);
});

app.get("*", (req, res) => {
  res.send(`<h1>404 NOT FOUND </h1>`);
});

app.listen(5000, () => {
  console.log(`Server is running on PORT 5000`);
});
