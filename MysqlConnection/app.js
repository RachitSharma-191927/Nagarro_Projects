const mongo = require("mongodb");

const url = 'mongodb://localhost:27017';

mongo.MongoClient.connect(url,(err,client)=>{
    if(err) console.log(err);
    else
    var datas=client.db('Data')
    console.log("Connected to the database");
    datas.createCollection("Values",(err)=>{
        if(err) console.log(err);
        else
        console.log("Collection is Created");
    });
    var value={
        name:"Rachit",
        Age:"20",
        City:"Ambala"
    }
    datas.collection("Values").insertOne(value,(err)=>{
        if(err) console.log("Error is there")
        console.log("Inserted One Value");
    })
})