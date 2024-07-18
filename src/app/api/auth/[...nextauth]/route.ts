import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/libs/prisma";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "usuario@dominio.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req) {
        const { email, password } = credentials;

        const userFound = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        if (!userFound) throw new Error("Credenciales invalidas");

        const validPassword = await bcrypt.compare(
          password,
          userFound.password
        );

        if (!validPassword) throw new Error("Credenciales invalidas");

        return {
          id: userFound.id + "",
          name: userFound.name,
          email: userFound.email,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id;
      }

      return token;
    },

    async session({ session, user, token }) {

      if (token) {
        session.user.id = token.sub as string;
      }

      return session;
    },
  },

  //Acá conectamos nuestras páginas con las predeterminadas de auth para que Auth use las plantillas que nosotros armamos y no las que él nos ofrece
  pages: {
    signIn: "/auth/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
