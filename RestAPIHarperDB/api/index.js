const db = require("../config/dbconfig");

exports.addBook = (req, result) => {
  db.insert(
    {
      table: "books",
      records: req.body,
    },
    (err, res) => {
      if (err) console.log(err);
      result.send(res);
      console.log(res);
    }
  );
};

exports.delBook = (req, result) => {
  db.delete(
    {
      table: "books",
      hashValues: req.body.hashValue,
    },
    (err, res) => {
      if (err) console.log(err);
      else result.send(res);
    }
  );
};

exports.searBook = (req, result) => {
  db.searchByValue(
    {
      table: "books",
      searchAttribute: "author",
      searchValue: req.body.author,
      attributes: ["*"],
    },
    (err, res) => {
      if (err) console.log(err);
      else result.send(res);
    }
  );
};
