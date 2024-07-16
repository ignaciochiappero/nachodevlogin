import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
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
      async authorize() {
        return null;
      },
    }),
  ],
  //Acá conectamos nuestras páginas con las predeterminadas de auth para que Auth use las plantillas que nosotros armamos y no las que él nos ofrece
  pages: {
    signIn: "/auth/login",
  }
});

export { handler as GET, handler as POST };
