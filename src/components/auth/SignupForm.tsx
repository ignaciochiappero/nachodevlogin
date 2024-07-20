"use client";
import { Flex, TextField, Button, Text } from "@radix-ui/themes";
import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function SigninForm() {
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
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    const res = await axios.post("/api/auth/register", data);
    console.log(res);

    if (res.status === 201) {
      const result = await signIn("credentials", {
        email: res.data.email,
        password: data.password,
        redirect: false,
      });

      if (!result?.ok) {
        console.log(result?.error);
        return;
      }

      router.push("/dashboard");
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="2">
        <label htmlFor="name">Nombre de usuario:</label>
        <TextField.Root>
          <TextField.Slot>
            <PersonIcon height="16" width="16" />
          </TextField.Slot>

          <Controller
            name="name"
            control={control}
            rules={{
              required: {
                message: "El nombre es requerido!",
                value: true,
              },
              maxLength: {
                message: "El nombre acepta hasta 20 caracteres",
                value: 20,
              },
              pattern: {
                value: /^[a-zA-Z0-9_-]+$/,
                message:
                  "Solo se permiten letras, números, guiones altos y bajos. No se permiten espacios ni caracteres especiales.",
              },
            }}
            render={({ field }) => {
              return (
                <TextField.Input
                  type="text"
                  placeholder="Nombre de usuario"
                  autoFocus
                  {...field}
                />
              );
            }}
          />
        </TextField.Root>
        {/* mensaje de error de ingresar nombre de usuario */}
        {errors.name && (
          <Text color="ruby" className="text-xs">
            {errors.name.message}
          </Text>
        )}

        <label htmlFor="email">Email</label>
        <TextField.Root>
          <TextField.Slot>
            <EnvelopeClosedIcon height="16" width="16" />
          </TextField.Slot>

          <Controller
            name="email"
            control={control}
            rules={{
              required: {
                message: "El email es requerido",
                value: true,
              },
            }}
            render={({ field }) => {
              return (
                <TextField.Input
                  type="email"
                  placeholder="email@dominio.com"
                  {...field}
                />
              );
            }}
          />
        </TextField.Root>

        {/* mensaje de error de ingresar mail */}
        {errors.email && (
          <Text color="ruby" className="text-xs">
            {errors.email.message}
          </Text>
        )}

        <label htmlFor="password">Contraseña</label>
        <TextField.Root>
          <TextField.Slot>
            <LockClosedIcon height="16" width="16" />
          </TextField.Slot>
          <Controller
            name="password"
            control={control}
            rules={{
              required: {
                message: "La clave es requerida",
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
                <TextField.Input
                  type="password"
                  placeholder="*******"
                  {...field}
                />
              );
            }}
          />
        </TextField.Root>
        {/* mensaje de error de ingresar password */}
        {errors.password && (
          <Text color="ruby" className="text-xs">
            {errors.password.message}
          </Text>
        )}

        <Button type="submit" color="blue">
          Resgistrate
        </Button>
      </Flex>
    </form>
  );
}
export default SigninForm;
