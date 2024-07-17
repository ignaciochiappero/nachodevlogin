"use client";

import {
  Heading,
  Link,
  Flex,
  Container,
  DropdownMenu,
  Button,
} from "@radix-ui/themes";
import NextLink from "next/link";

import { useSession, signOut } from "next-auth/react";

import { CaretDownIcon } from "@radix-ui/react-icons";

function Navbar() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <nav className="bg-zinc-950 py-4">
      <Container>
        <Flex justify="between" align="center">
          <NextLink href="/">
            <Heading>Radix Next</Heading>
          </NextLink>

          {/* Contenedor de la lista */}
          <ul className="flex gap-x-2 items-center">
            

            {/* SE MUESTRA SIN USUARIO LOGEADO */}
            {
                !session && (
                    <>
                        <li>
                        <Link asChild>
                            <NextLink href="/auth/login" passHref>
                            Login
                            </NextLink>
                        </Link>
                        </li>

                        <li>
                        <Link asChild>
                            <NextLink href="/auth/register" passHref>
                            Register
                            </NextLink>
                        </Link>
                        </li>

                    
                    </>
                )
            }
    {/* ////////////////////////////////////////////////// */}


            {/* SE MUESTRA CON USUARIO LOGEADO */}
            {
                session && (
                    <>

                        <li>
                            <Link asChild>
                                <NextLink href="/dashboard" passHref>
                                Dashboard
                                </NextLink>
                            </Link>
                        </li>
                    
                        <li>
                            <DropdownMenu.Root>
                                <DropdownMenu.Trigger>
                                <Button variant="soft">
                                    {session?.user?.name}
                                    <DropdownMenu.TriggerIcon />
                                </Button>
                                </DropdownMenu.Trigger>

                                <DropdownMenu.Content>
                                <DropdownMenu.Item>Mi perfil</DropdownMenu.Item>

                                <DropdownMenu.Item>Ajustes</DropdownMenu.Item>

                                <DropdownMenu.Separator />

                                <DropdownMenu.Item color="red" onClick={() => signOut()}>
                                    Cerrar sesión
                                </DropdownMenu.Item>
                                </DropdownMenu.Content>
                            </DropdownMenu.Root>
                        </li>
                    
                    </>
                )

            }
    {/* ////////////////////////////////////////////////// */}

          </ul>
          {/* ////////////////////////////// */}
        </Flex>
      </Container>
    </nav>
  );
}

export default Navbar;
