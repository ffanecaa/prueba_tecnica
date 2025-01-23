import { useState } from "react";

const apiUrl = "https://localhost:5001/api/Tareas";

export interface Tarea {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  createdAt: string;
}

export const useTareas = () => {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [tarea, setTarea] = useState<Tarea | null>(null);

  const fetchTareas = async () => {
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setTareas(data.reverse());
      } else {
        console.error("Error al obtener las tareas:", response.statusText);
      }
    } catch (error) {
      console.error("Error al obtener las tareas:", error);
    }
  };

  const fetchTareaById = async (id: number) => {
    try {
      const response = await fetch(`${apiUrl}/${id}`);
      if (response.ok) {
        const data = await response.json();
        setTarea(data); // Guarda la tarea específica
      } else {
        console.error("Error al obtener la tarea por ID:", response.statusText);
      }
    } catch (error) {
      console.error("Error al obtener la tarea por ID:", error);
    }
  };

  const createTarea = async (nuevaTarea: Tarea) => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevaTarea),
      });

      if (response.ok) {
        const data = await response.json();
        setTareas((prevTareas) => [...prevTareas, data]);
        
      } else {
        console.error("Error al crear la tarea:", response.statusText);
      }
    } catch (error) {
      console.error("Error al crear la tarea:", error);
    }
  };

  const updateTarea = async (id: number, tareaActualizada: Tarea) => {
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tareaActualizada),
      });

      if (response.ok) {
        const updatedTarea = await response.json();
        setTareas((prevTareas) =>
          prevTareas.map((tarea) => (tarea.id === id ? updatedTarea : tarea))
        );
      } else {
        console.error("Error al actualizar la tarea:", response.statusText);
      }
    } catch (error) {
      console.error("Error al actualizar la tarea:", error);
    }
  };

  const deleteTarea = async (id: number) => {
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setTareas((prevTareas) => prevTareas.filter((tarea) => tarea.id !== id));
      } else {
        console.error("Error al eliminar la tarea:", response.statusText);
      }
    } catch (error) {
      console.error("Error al eliminar la tarea:", error);
    }
  };

  return {
    tareas,
    tarea,
    fetchTareas,
    fetchTareaById,
    createTarea,
    updateTarea,
    deleteTarea,
  };
};
