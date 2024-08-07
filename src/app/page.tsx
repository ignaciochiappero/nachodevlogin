import { Metadata } from "next";
import { Container } from "@radix-ui/themes";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import {redirect} from "next/navigation";
import { authOptions } from "@/libs/authOptions";

export const metadata: Metadata = {
  title: "CRUD Project | Nacho Dev",
  description: "Page made by Nacho Dev",
};


async function HomePage() {

// Esto es por si ya estamos logeados, para que directamente nos mande al dashboard y no nos mande al inicio todo el tiempo cuando le damos click en el titulo
  const session = await getServerSession(authOptions);

  if (session){
    redirect("/dashboard ");
  }
////////////////////////////////////////////////////////////////


  return (
    <Container className="px-5 ">
      <header className="my-4 bg-slate-900 p-10 rounded-md">
        <h1 className="md:text-7xl sm:text-4xl max-sm:text-2xl my-10"> <span className="text-orange-500">Bienvenidos</span> al gestor de proyectos!</h1>
        <p>
          Esta es una app Full Stack desarrollada por Nacho <span className="text-orange-500" >Dev</span>, podés registrarte y guardar, editar y eliminar tus propios proyectos. Esta app fue construida con tecnologías como NextJS, NodeJS, TailwindCSS, Typescript, React, Radix UI, NextAuth, Prisma y PostgreSQL.
        </p>

        <div className="mt-5">
          <Link
            href="/auth/login"
            className="text-black bg-orange-500 px-2 py-1 rounded-md "
          >
            Ingresá!
          </Link>
        </div>
      </header>
    </Container>
  );
}

export default HomePage;
