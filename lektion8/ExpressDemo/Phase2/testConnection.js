const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://localhost:27017");

async function run() {
  await client.connect();
  const db = client.db("myWebApp");
  const notes = db.collection("notes");

  await notes.insertOne({
    title: "Hello from Node",
    content: "This came from the backend"
  });

  const allNotes = await notes.find().toArray();
  console.log(allNotes);
}

run();