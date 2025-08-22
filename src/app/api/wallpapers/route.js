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
