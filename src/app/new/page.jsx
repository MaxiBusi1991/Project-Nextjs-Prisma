"use client"
//TENGO QUE CORREGIR PORQUE NO ME TRAE LA TAREA EN EL FORMULARIO!!!!
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function NewPage({params}) {
  const router = useRouter()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
      .then((res) => res.json())
      .then((data) =>{
        setTitle(data.title);
        setDescription(data.description);
    })
    }
  },[])

  const onSubmit = async (e) => {
    e.preventDefault();
    
    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({title, description}),
        headers: {
          "Content-Type": "application/json",
        }
      })
      const data = await res.json()
      console.log(data)
    }else{
      const res = await fetch("api/tasks", {
        method: "POST",
        body: JSON.stringify({title, description}),
        headers: {
          "Content-Type": "application/json"
        },
      })
      const data = await res.json()
    }
    router.push("/");
    router.refresh()
  }
  return (
    <div className="h-screen flex justify-center items-center ">
      <form className="bg-slate-800 p-10 lg:w-1/4 md:w-full" onSubmit={onSubmit}>

        <label htmlFor="title" className="font-bold text-sm">Título de la tarea</label>
        <input
        className="border border-gray-400 p-2 mb-4 w-full text-black"
        type="text"
        id="title"
        placeholder="Título.."
        onChange={(e) => setTitle(e.target.value)}
        value={title}/>

        <label htmlFor="description" className="font-bold text-sm">Describe tu tarea</label>
        <textarea
        className="border border-gray-400 p-2 mb-4 w-full text-black"
        rows="3"
        id="description"
        placeholder="Describe tu tarea aquí.."
        onChange={(e) => setDescription(e.target.value)}
        value={description}></textarea>
        <div className="flex justify-around">
          <button className="bg-blue-400 hover:bg-blue-600 font-bold py-2 px-2 rounded" type="submit">crear</button>
          {
            params.id && (
              <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded ml-4"
              type="button"
              onClick={async() => {
                const res = await fetch(`/api/tasks/${params.id}`,
                {method: "DELETE"});
                const data = await res.json();
                router.push("/");
                router.refresh();
              }}
              >Eliminar</button>
            )
          }
        </div>
      </form>
    </div>
  )
}

export default NewPage