import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from 'next'

// MongoDB connection string
const uri = process.env.MONGODB_URI;

// Create a new MongoClient
const client = new MongoClient(uri);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { walletAddress } = req.query;

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Specify the database and collection
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection(process.env.COLLECTION_NAME);

    // Get the user's points
    const user = await collection.findOne({ walletAddress: walletAddress });

    res.status(200).json({ points: user ? user.points : 0 });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    await client.close();
}
}