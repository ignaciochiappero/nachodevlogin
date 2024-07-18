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

function TaskNewPage() {
  const { control, handleSubmit } = useForm({
    values: {
      title: "",
      description: "",
    }
  });

  const onSubmit = handleSubmit(data=>{
    console.log(data);
  })

  return (
    <div>
      <Container size="1" height="%100" className="p-3 md:p-0">
        <Flex className="h-screen w-full items-center">
          <Card className="w-full p-7">
            <form className="flex flex-col gap-y-2" onSubmit={onSubmit}>
              <Heading>Crear Proyecto</Heading>

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

              <Button>Create Project</Button>
            </form>
          </Card>
        </Flex>
      </Container>
    </div>
  );
}

export default TaskNewPage;
