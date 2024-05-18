import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    try {
      const task = await prisma.task.findUnique({
        where: {
          id: Number(params.id)
        }
      })
      console.log(task)
      if (task.length) {
        return NextResponse.json({"éstas son las tareas": task});        
      } else {
        return NextResponse.json({msg:"No tenes tareas"});
      }
    } catch (error) {
      return NextResponse.json(error.message);
    }
}

export async function PUT(request, {params}) {
  try {
    const data = await request.json();

  const updateTask = await prisma.task.update({
    where: {
      id: Number(params.id)
    },
      data: data
  })
  return NextResponse.json(updateTask)
  } catch (error) {
    return NextResponse.json(error.message);
  }
}

export async function DELETE(request, {params}) {
  try {
    const deletedTask = await prisma.task.delete({
      where: {
        id: Number(params.id)
      }
    })
    return NextResponse.json({"ésta es la tarea eliminada": deletedTask});
  } catch (error) {

    return NextResponse.json(error.message);
  }
}