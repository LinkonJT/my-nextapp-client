import dbConnect from "@/lib/dbConnect";

export async function GET() {
  try {
    const wallpapersCollection = await dbConnect("wallpapersCollection");
    const wallpapers = await wallpapersCollection.find({}).toArray();

    return new Response(JSON.stringify(wallpapers), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const wallpapersCollection = await dbConnect("wallpapersCollection");
    const result = await wallpapersCollection.insertOne(data);

    return new Response(JSON.stringify({ success: true, insertedId: result.insertedId }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
