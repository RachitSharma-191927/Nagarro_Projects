const mongo = require("mongodb");
const { default: axios } = require("axios");
const url = "mongodb://localhost:27017";

mongo.MongoClient.connect(url, async (err, client) => {
  if (err) console.log(err);
  else var datas = client.db("Jokes");
  console.log("Connected to the database");
  var values;
  var data = await axios
    .get("https://api.chucknorris.io/jokes/random")
    .then((res) => {
      console.log(res.data.value);
      values = {
        joke: res.data.value,
        date: res.data.created_at,
      };
    });

  datas.collection("jokes").insertOne(values, (err) => {
    if (err) console.log("Error is there");
    console.log("Inserted Joke Value");
  });
});
