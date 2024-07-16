"use client";

import { Flex, TextField, Button, Text } from "@radix-ui/themes";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { useForm, Controller } from "react-hook-form";

import { signIn } from "next-auth/react";

import {useRouter} from "next/navigation";

function SigninForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      email: "",
      password: "",
    },
  });

  const router = useRouter(); //

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    //Estos datos vienen de @/src/app/api/auth/[...nextauth]/route.ts y nosotros le pusimos de nombre 'credentials'
    const res = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    })

    if (!res?.ok ) {
      console.log(res);
    }

    router.push("/dashboard");
  });

  return (
    <form onSubmit={onSubmit}>

      <Flex direction="column" gap="2">
        
        {/* INPUT PARA INGRESAR EL MAIL */}
        <label htmlFor="email">Email</label>

        <Controller
          name="email"
          control={control}
          rules={{
            //Esto hace que me pida sí o sí un mail
            required: {
              message: "Email requerido",
              value: true,
            },
          }}
          render={({ field }) => {
            //HACEMOS ESTO PARA QUE SE GUARDE LA INFO DEL MAIL QUE SE RELLENA
            return (
              <TextField.Root
                type="email"
                placeholder="email@domain.com"
                autoFocus
                {...field}
              >
                <TextField.Slot>
                  <LockClosedIcon height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
            );
          }}
        />

        {/* mensaje de error de ingresar mail */}
        {errors.email && (
          <Text color="ruby" className="text-xs">
            {errors.email.message}
          </Text>
        )}

        {/* ///////////////////////////// */}

        {/* INPUT PARA INGRESAR EL PASSWORD */}
        <label htmlFor="password">Contraseña</label>

        <Controller
          name="password"
          control={control}
          rules={{
            //Esto hace que me pida sí o sí una contraseña
            required: {
              message: "Contraseña requerida",
              value: true,
            },
            minLength: {
              message: "La contraseña tiene que tener al menos 6 caracteres",
              value: 6,
            },
          }}
          render={({ field }) => {
            return (
              <TextField.Root
                type="password"
                placeholder="*********"
                {...field}
              >
                <TextField.Slot>
                  <LockClosedIcon height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
            );
          }}
        />

        {/* mensaje de error de ingresar password */}
        {errors.password && (
          <Text color="ruby" className="text-xs">
            {errors.password.message}
          </Text>
        )}

        {/* ///////////////////////////// */}

        <Button type="submit" mt="4">
          Ingresar
        </Button>
      </Flex>
    </form>
  );
}

export default SigninForm;
