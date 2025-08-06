import NextAuth from "next-auth";
import CredentailsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/user";
import bcrypt from "bcrypt";


const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentailsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials){
        await dbConnect();
        const user = await User.findOne({ email: credentials?.email });
        if (!user) {
          throw new Error("No user found with this email");
        }
        const isPasswordValid = await bcrypt.compare(credentials!.password, user.password);
        if (!isPasswordValid) {
          throw new Error("Invalid password");
        }
        return {id:user._id, email: user.email, name: user.name};
      }
    }),
  ],
  pages: {
    signIn: "/login",
  },
});

export {handler as GET, handler as POST};