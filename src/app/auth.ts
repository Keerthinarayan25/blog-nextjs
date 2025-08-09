import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcryptjs";
import User from "@/models/user";


export const { handlers, auth, signIn, signOut } = NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {label:"Email", type:"text"},
        password: {label:"Password", type:"password"},
      },
      async authorize(credentials) {
        await dbConnect();
        const user = await User.findOne({email: credentials?.email}).select("+password");

        if(!user || !user.password){
          throw new Error("Invalid email or password");
        }

        const isPasswordValid = await bcrypt.compare(credentials!.password, user.password);

        if(!isPasswordValid){
          throw new Error("Invalid email or password");
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  callbacks:{
    async jwt({token, user }){
      if(user){
        token.id = (user as {id:string}).id;
      }
      return token;
    },
    async session({session, token}){
      if(session.user){
        (session.user as { id: string }).id = token.id as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "signin"
  },
})




