import TwitterProvider from "next-auth/providers/twitter"
import GoogleProvider from "next-auth/providers/google"
import InstagramProvider from "next-auth/providers/instagram";
import EmailProvider from "next-auth/providers/email";
import NextAuth from "next-auth";

export const authoptions = NextAuth({


providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM
    }),
]
})
  
  export { authoptions as GET, authoptions as POST }    