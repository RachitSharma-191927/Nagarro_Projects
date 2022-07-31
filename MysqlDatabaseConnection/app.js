var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rachit@2002",
  database: "NName",
});

con.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Succesfully Connected");
    con.query(
      'insert into Data (Name,class) values ("Rachit",10);',
      (err, res) => {
        if (err) console.log(err);
        else console.log(res);
      }
    );
  }
});
