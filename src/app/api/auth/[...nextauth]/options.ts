import type { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'someone@vodafone.com',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '********',
        },
      },
      async authorize(credentials) {
        // TODO: Validate credentials against your database
        // If credentials are valid, return user details.
        // If not, throw an error or return null.
        const userDetails = {
          id: '1',
          email: 'abc@vodafone.com',
          password: 'authcheck',
        };

        if (
          credentials?.email === userDetails.email &&
          credentials?.password === userDetails.password
        ) {
          return userDetails;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
};
