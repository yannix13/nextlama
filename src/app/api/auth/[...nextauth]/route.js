import connect from "@/utils/db";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";
import User from "@/models/User";


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialProvider({
      id: "credentials",
      name: "credentials",
      async authorize(credentials){

        await connect()

        try {
          const user = await User.findOne({email: credentials.email});

          if(user){
            //check password
            console.log(user)
            const isPasswordCorrect = await bcryptjs.compare(credentials.password, user.password);

            if(isPasswordCorrect){
              console.log(user);
              return user;
            }else{
              throw new Error("Wrong Credentials");
            }

          }else{
            console.log("User not found");
            throw new Error("User not found");
          }

        } catch (error) {
          throw new Error(error)
        }
      }
    })
  ],
  pages:{
    error:"/dashboard/login"
  }
})

export { handler as GET, handler as POST }