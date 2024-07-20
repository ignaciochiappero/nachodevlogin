"use client";
import {
  Heading,
  Link,
  Flex,
  Container,
  DropdownMenu,
  Button,
} from "@radix-ui/themes";
import { CaretDownIcon } from "@radix-ui/react-icons";
import NextLink from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

function Navbar() {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  return (
    <nav className="px-10  bg-zinc-950 py-4 max-sm:px-0 md:px-0 ">
      <Container>
        <Flex justify="between" align="center" className="mx-4">
          <NextLink href="/" className="flex gap-1 items-center ">
            <div className="max-sm:h-5 max-sm:w-5 ">
              <Image
                src="/Logo2.png"
                width="25"
                height="25" 
                alt={""}              
              />
            </div>
            <Heading>
              <h1 className="text-1xl max-sm:text-lg">Nacho <span className="text-orange-500">Dev</span></h1>              
              
            </Heading>

          </NextLink>

          <ul className="flex gap-x-2 items-center">
            {!session && (
              <>
                <li>
                  <Link asChild>
                    <NextLink href="/auth/login" passHref>
                      Ingresar
                    </NextLink>
                  </Link>
                </li>
                <li>
                  <Link asChild>
                    <NextLink href="/auth/register" passHref>
                      Registro
                    </NextLink>
                  </Link>
                </li>
              </>
            )}

            {session && (
              <>
                <li>
                  <Link asChild>
                    <NextLink href="/dashboard" passHref>
                      Proyectos
                    </NextLink>
                  </Link>
                </li>
                <li>
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                      <Button variant="soft">
                        {session?.user?.name}
                        <CaretDownIcon />
                      </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                      {/* <DropdownMenu.Item>My Profile</DropdownMenu.Item>
                      <DropdownMenu.Item>Settings</DropdownMenu.Item>
                      <DropdownMenu.Separator /> */}
                      <DropdownMenu.Item color="red" onClick={() => signOut()}>
                        Cerrar sesión
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                </li>
              </>
            )}
          </ul>
        </Flex>
      </Container>
    </nav>
  );
}
export default Navbar;