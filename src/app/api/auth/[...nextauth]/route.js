import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/dbConnect";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        const usersCollection = await dbConnect("users");
        const user = await usersCollection.findOne({ email });

        if (!user) {
          throw new Error("No user found with this email");
        }

        // For now, plain-text password check (since you said no bcrypt yet)
        if (user.password !== password) {
          throw new Error("Invalid password");
        }

        // Return user object
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
