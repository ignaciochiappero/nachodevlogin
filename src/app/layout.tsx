import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ContextProvider from "@/context/GlobalContext";
//Importación de componentes Radix
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App de Proyectos | Nacho Dev",
  description: "Pagina hecha por Nacho Dev",
  icons: "favicon.ico"
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
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <div className="flex-grow">
                {children}
              </div>
              <Footer />
            </div>
          </Theme>
        </ContextProvider>
      </body>
    </html>
  );
  
}
