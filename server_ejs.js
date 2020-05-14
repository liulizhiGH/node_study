const http = require("http");
const ejs = require("ejs");

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html;charset=utf-8;" });

    ejs.renderFile("./views/index.ejs", { msg: "hello EJS" }, (err, str) => {
      res.end(str);
    });
  })
  .listen(3000, "127.0.0.1", () => {
    console.log("server at http://127.0.0.1:3000");
  });
