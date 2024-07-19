"use client";

import { useRouter } from "next/navigation";
import { Button, Container, Heading } from "@radix-ui/themes";


function HeaderDashboard() {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center mb-4">
      <Heading>Proyectos</Heading>
      <Button onClick={() => router.push("/dashboard/projects/new")}>
        Agregar proyecto +
      </Button>
    </div>
  );
}

export default HeaderDashboard;
