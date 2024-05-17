import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb';

const uri = process.env.NEXT_PUBLIC_MONGO || "mongodb";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    await client.connect();
    const data = await client.db("tigrebot")
                             .collection("mensagens")
                             .find()
                             .limit(7)
                             .sort({ $natural: -1 })
                             .toArray();
    return res.status(200).json(data.reverse());
  } catch (err) {
    const error = err as Error;
    return res.status(500).json({ message: error.message })
  } finally {
    await client.close();
  }
}
