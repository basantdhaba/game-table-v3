// server.js (or index.js)
const express = require('express');
const { MongoClient } = require('mongodb'); // MongoDB Client
const app = express();
const port = 3000;

const uri = "mongodb://localhost:27017"; // Replace with your MongoDB URI
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToDatabase();

app.get('/api/games/:game', async (req, res) => {
  const game = req.params.game;
  try {
    const db = client.db("your_database_name"); // Replace with your DB name
    const collection = db.collection("games"); // Replace with your collection name

    const gameData = await collection.findOne({ name: game }); // Find data by game name
    res.json(gameData ? gameData.results : []); // Send results or empty array
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});