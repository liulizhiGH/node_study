const mysql = require("mysql");

// 创建数据库链接对象
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "1234567",
  database: "test",
});
// 链接数据库
connection.connect();
// 创建sql语句
let insert = "insert into user(name,password) value (?,?)";
let deleteSql = "delete from user where id=?";
let updateSql = "update user set password=? where id=?";
// 执行sql语句
connection.query(updateSql, ["739739739",3], (err, results) => {
  if (err) {
    console.log(err.message);
    return;
  }
  if (results.affectedRows != 0) {
    console.log("插入成功" + results.insertId);
  } else {
    console.log("插入失败");
  }
});
// 关闭数据库链接
connection.end();
