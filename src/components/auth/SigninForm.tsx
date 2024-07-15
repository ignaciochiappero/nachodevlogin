"use client";

import { Flex, TextField, Button } from "@radix-ui/themes";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";

function SigninForm() {
  return (
    <Flex direction="column" gap="2">

      {/* INPUT PARA INGRESAR EL MAIL */}
      <label htmlFor="email">Email</label>

      <TextField.Root 
        type="email"
        placeholder="email@domain.com" autoFocus  >
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

      <Button>Ingresar</Button>

    </Flex>
  );
}

export default SigninForm;
