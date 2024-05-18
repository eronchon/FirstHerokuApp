const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = process.env.PORT || 3000;

const url =
  "mongodb+srv://chin6030:GMyGos9iQ140yMDm@cluster0.kfomgfy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(url);

async function connectDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  }
}

connectDatabase();

app.get("/", async (req, res) => {
  const db = client.db("test");
  const collection = db.collection("example");
  const result = await collection.find().toArray();
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
