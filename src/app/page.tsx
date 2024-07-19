import { Metadata } from "next";
import { Container } from "@radix-ui/themes";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import {redirect} from "next/navigation";
import { authOptions } from "@/libs/authOptions";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page made Nacho Dev",
};


async function HomePage() {

// Esto es por si ya estamos logeados, para que directamente nos mande al dashboard y no nos mande al inicio todo el tiempo cuando le damos click en el titulo
  const session = await getServerSession(authOptions);

  if (session){
    redirect("/dashboard ");
  }
////////////////////////////////////////////////////////////////


  return (
    <Container className="px-5 md:px-0">
      <header className="my-4 bg-slate-900 p-10 rounded-md">
        <h1 className="text-7xl my-10">NextAuth Radix</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
          ratione! Cupiditate sequi minima quibusdam, provident atque natus sit
          maxime necessitatibus blanditiis, sed voluptas! Placeat a, repellat
          sunt itaque eveniet adipisci.
        </p>

        <div className="mt-5">
          <Link
            href="/auth/login"
            className="text-white bg-blue-500 px-2 py-1 rounded-md "
          >
            Ingresá!
          </Link>
        </div>
      </header>
    </Container>
  );
}

export default HomePage;
