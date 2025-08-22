import { MongoClient, ServerApiVersion } from "mongodb";

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3h4lqut.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default async function dbConnect(collectionName) {
  if (!client.topology?.isConnected()) {
    await client.connect();
  }
  return client.db(process.env.DB_NAME).collection(collectionName);
}
