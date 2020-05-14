// 引入http内置模块
const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
// 引入第三方模块
const mime = require("mime");
// 创建服务器实例
const server = http.createServer((req, res) => {
  // 打印客户端的请求url
  let myUrl = url.parse(req.url);
  let pathname = myUrl.pathname;
  console.log(pathname,"papapap")
  let base = "./dist";
  let mimeStr = mime.getType(pathname);
  console.log(mimeStr);
  // 忽略favicon
  if (pathname == "/favicon.ico") {
    return;
  }
  if (req.method.toLowerCase() == "get") {
    res.writeHead(200, { "content-type": mimeStr });
    console.log(base + pathname, "123");
    fs.readFile(base + pathname, (err, data) => {
      if (err) {
        console.log(err.message, "这是err");
        return;
      }
      res.end(data);
    });
  } else if (req.method.toLowerCase() == "post") {
    if (pathname == "/login")
      console.log("正在进行登陆操作，即正在发送登录数据");
  }
});

// 监听服务的运行
server.listen(4000, "127.0.0.1", () => {
  console.log("服务已经运行在127.0.0.1:3000");
});
