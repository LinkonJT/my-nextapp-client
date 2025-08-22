import dbConnect from "@/lib/dbConnect";

export async function GET() {
  try {
    const wallpapersCollection = await dbConnect("wallpapersCollection");

    // Find just one document for testing
    const oneDoc = await wallpapersCollection.findOne({});

    return new Response(
      JSON.stringify({
        success: true,
        message: "MongoDB connected successfully!",
        testDoc: oneDoc,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to connect MongoDB",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
