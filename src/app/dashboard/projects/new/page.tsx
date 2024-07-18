"use client";

import {
  TextField,
  TextArea,
  Button,
  Container,
  Flex,
  Card,
  Heading,
} from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

import { useRouter, useParams } from "next/navigation";
import { TrashIcon } from "@radix-ui/react-icons";

function TaskNewPage() {
  const { control, handleSubmit } = useForm({
    values: {
      title: "",
      description: "",
    },
  });

  const params = useParams(); //
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    if (!params.projectId) {
      const res = await axios.post(`/api/projects`, data);

      //Esto redirecciona al dashboard cuando el usuario crea una tarea
      if (res.status === 201) {
        router.push(`/dashboard`);
        router.refresh();
      }
    } else {
      console.log("Actualizando");
    }
  });

  return (
    <div>
      <Container size="1" height="%100" className="p-3 md:p-0">
        <Flex className="h-screen w-full items-center">
          <Card className="w-full p-7">
            <form className="flex flex-col gap-y-2" onSubmit={onSubmit}>
              <Heading>
                {params.projectId ? "Editar Proyecto" : "Crear Proyecto"}
              </Heading>

              <label>Título del proyecto</label>

              <Controller
                name="title"
                control={control}
                render={({ field }) => {
                  return (
                    <TextField.Root
                      size="3"
                      placeholder="Nombre del proyecto"
                      {...field}
                    />
                  );
                }}
              />

              <label>Descripción del proyecto</label>
              <Controller
                name="description"
                control={control}
                render={({ field }) => {
                  return (
                    <TextArea
                      size="3"
                      placeholder="Escribir una tarea"
                      {...field}
                    />
                  );
                }}
              />

              <Button>
                {params.projectId ? "Editar Proyecto" : "Crear Proyecto"}
              </Button>
            </form>

            <div className="flex justify-end my-4">
              {params.projectId && (
                <Button color="red">
                  <TrashIcon />
                  Eliminar Proyecto
                </Button>
              )}
            </div>
          </Card>
        </Flex>
      </Container>
    </div>
  );
}

export default TaskNewPage;
