import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//Importación de componentes Radix
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import Navbar from "@/components/Navbar";

import ContextProvider from "@/context/GlobalContext";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App de Proyectos | Nacho Dev",
  description: "Pagina hecha por Nacho Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <Theme appearance="dark">
            
            <Navbar/>
            {children}
            
            </Theme>
        </ContextProvider>
      </body>
    </html>
  );
}
