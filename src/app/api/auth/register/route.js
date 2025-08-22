import dbConnect from "@/lib/dbConnect";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const usersCollection = await dbConnect("users");

    // Check if user already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ error: "User already exists" }), { status: 400 });
    }

    // Save user as plain text for now
    const result = await usersCollection.insertOne({
      name,
      email,
      password, // storing plain text for now
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ success: true, userId: result.insertedId }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
