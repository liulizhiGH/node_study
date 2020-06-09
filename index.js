const express = require("express");
const app = express();
app.listen("3000");

app.set("view engine","ejs");
app.set("vie21312312ws",`${__dirname}/views`)

app.get("/index",(req,res)=>{
  res.render("index",{ms1g:"hello ejs engine"});

})