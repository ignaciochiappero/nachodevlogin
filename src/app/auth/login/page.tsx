import { Container, Card, Heading, Flex, Text, Link } from "@radix-ui/themes";
import SigninForm from "@/components/auth/SigninForm";
import NavLink from "next/link"; // Es el link clásico de next pero renombrado para que no entren en conflicto uno con otro

function LoginPage() {
  return (
    <>
      <Container size="1" height="100%" className="p-3 md:p-0 ">
        <Flex className="h-screen w-full items-center">
          <Card className="w-full p-7">

            <Heading>Ingresar</Heading>
            <SigninForm/> {/* Form de login */}
            
            


            {/* No tienes una cuenta? */}
            <Flex justify="between" my="4">
              <Text>
                No tenés una cuenta? 
              </Text>


              {/* Ponemos este Link de Radix por los estilos, pero usamos el de next realmente por la velocidad*/}
              <Link asChild> 
                <NavLink href="/auth/register" passHref>
                  Registrate!
                </NavLink>
              </Link>
            </Flex>

          </Card>

        </Flex>
      </Container>
    </>
  );
}

export default LoginPage;
