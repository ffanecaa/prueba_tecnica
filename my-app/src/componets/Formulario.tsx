import { useState } from "react";
import { useTareas, Tarea } from "../hooks/UseTareas";
import "../styles/formulario.css";

const Formulario = () => {
  const { createTarea } = useTareas();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDescription(e.target.value);
  const handleIsCompletedChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setIsCompleted(e.target.checked);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nuevaTarea: Tarea = {
      id: 0,
      title,
      description,
      isCompleted,
      createdAt: new Date().toISOString(),
    };

    createTarea(nuevaTarea);

    setTitle("");
    setDescription("");
    setIsCompleted(false);
  };

  return (
    <div className="container_form">
      <h2>Nueva Tarea </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Título"
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <input
            placeholder="Descripción"
            type="text"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <div>
          <label htmlFor="isCompleted">Completada:</label>
          <input
            type="checkbox"
            id="isCompleted"
            checked={isCompleted}
            onChange={handleIsCompletedChange}
          />
        </div>
        <button type="submit">Crear Tarea</button>
      </form>
    </div>
  );
};

export default Formulario;
