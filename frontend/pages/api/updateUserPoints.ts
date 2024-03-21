import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from 'next'

// MongoDB connection string
const uri = process.env.MONGODB_URI;
// Create a new MongoClient
const client = new MongoClient(uri);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { walletAddress } = req.body;

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Specify the database and collection
        const db = client.db(process.env.DB_NAME);
        const collection = db.collection(process.env.COLLECTION_NAME);

        // Update the user's points
        const result = await collection.updateOne(
            { walletAddress: walletAddress },
            { $inc: { points: 1 } },
            { upsert: true }
        );

        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false });
    } finally {
        await client.close();
    }
}