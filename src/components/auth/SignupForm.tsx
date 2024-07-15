"use client";

import { Flex, TextField, Button } from "@radix-ui/themes";
import { EnvelopeClosedIcon, LockClosedIcon, PersonIcon } from "@radix-ui/react-icons";

function SignupForm() {
  return (
    <Flex direction="column" gap="2">

    {/* INPUT PARA INGRESAR EL NOMBRE DE USUARIO */}
    <label htmlFor="name">Nombre de usuario:</label>

    <TextField.Root 
    type="text"
    placeholder="Escribí tu nombre de usuario"  >
    <TextField.Slot>
        <PersonIcon height="16" width="16" />
    </TextField.Slot>
    
    </TextField.Root>
    {/* ///////////////////////////// */}


      {/* INPUT PARA INGRESAR EL MAIL */}
      <label htmlFor="email">email</label>

      <TextField.Root 
        type="email"
        placeholder="email@domain.com"  >
        <TextField.Slot>
          <EnvelopeClosedIcon height="16" width="16" />
        </TextField.Slot>
       
      </TextField.Root>
      {/* ///////////////////////////// */}


      {/* INPUT PARA INGRESAR EL PASSWORD */}
      <label htmlFor="password">Contraseña</label>

      <TextField.Root 
        type="password"
        placeholder="*********">

        <TextField.Slot>
          <LockClosedIcon height="16" width="16" />
        </TextField.Slot>

      </TextField.Root>
      {/* ///////////////////////////// */}

      <Button>Registrarse</Button>

    </Flex>
  );
}

export default SignupForm;
