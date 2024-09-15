import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./connect";
import { getServerSession } from "next-auth";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      // Check if user already exists based on their email
      const existingUser = await prisma.user.findUnique({
        where: { email: user.email },
      });

      if (existingUser) {
        // Check if the OAuth account is already linked
        const linkedAccount = await prisma.account.findFirst({
          where: {
            userId: existingUser.id,
            provider: account.provider,
            providerAccountId: account.providerAccountId,
          },
        });

        if (!linkedAccount) {
          // Link the new OAuth account to the existing user
          await prisma.account.create({
            data: {
              userId: existingUser.id,
              provider: account.provider,
              providerAccountId: account.providerAccountId,
              access_token: account.access_token,
              refresh_token: account.refresh_token,
            },
          });
        }
        
        return true; // Allow sign-in
      }

      return true; // Proceed with the sign-in for new users
    },
    
    async session({ session, user }) {
      // Add user ID to the session object for later use
      session.user.id = user.id;
      return session;
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
