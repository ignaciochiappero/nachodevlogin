"use client";

import { Flex, TextField, Button, Text } from "@radix-ui/themes";
import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

import { useForm, Controller } from "react-hook-form";

import axios from "axios";

function SignupForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    const res = await axios.post("/api/auth/register", data);
    console.log(res);
  });

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="2">
        {/* INPUT PARA INGRESAR EL NOMBRE DE USUARIO */}
        <label htmlFor="name">Nombre de usuario</label>

        <Controller
          name="name"
          control={control}
          rules={{
            //Esto hace que me pida sí o sí un nombre
            required: {
              message: "Nombre de usuario requerido",
              value: true,
            },
            pattern: {
              value: /^[a-zA-Z0-9_-]+$/,
              message:
                "Solo se permiten letras, números, guiones altos y bajos. No se permiten espacios ni caracteres especiales.",
            },
          }}
          render={({ field }) => {
            //HACEMOS ESTO PARA QUE SE GUARDE LA INFO DEL NOMBRE QUE SE RELLENA
            return (
              <TextField.Root
                type="text"
                placeholder="Nombre de usuario"
                autoFocus
                {...field}
              >
                <TextField.Slot>
                  <PersonIcon height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
            );
          }}
        />

        {/* mensaje de error de ingresar nombre de usuario */}
        {errors.name && (
          <Text color="ruby" className="text-xs">
            {errors.name.message}
          </Text>
        )}

        {/* ///////////////////////////// */}

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
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{6,}$/,
              message:
                "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial",
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
          Registrarse
        </Button>
      </Flex>
    </form>
  );
}

export default SignupForm;
