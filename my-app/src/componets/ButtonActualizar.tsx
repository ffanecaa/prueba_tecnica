import React, { useState } from "react";
import { Tarea } from "../hooks/UseTareas";

interface ButtonActualizarProps {
  tarea: Tarea;
  onUpdateTarea: (id: number, updatedTarea: Tarea) => void;
}

const ButtonActualizar: React.FC<ButtonActualizarProps> = ({ tarea, onUpdateTarea }) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [title, setTitle] = useState(tarea.title);
  const [description, setDescription] = useState(tarea.description);
  const [isCompleted, setIsCompleted] = useState(tarea.isCompleted);

  const handleTitleUpdate = () => {
    const updatedTarea = { ...tarea, title };
    onUpdateTarea(tarea.id, updatedTarea);
    setIsEditingTitle(false);
  };

  const handleDescriptionUpdate = () => {
    const updatedTarea = { ...tarea, description };
    onUpdateTarea(tarea.id, updatedTarea);
    setIsEditingDescription(false); // Oculta el campo de edición después de actualizar
  };

  const handleCompletionChange = () => {
    const updatedTarea = { ...tarea, isCompleted: !isCompleted };
    setIsCompleted(!isCompleted); // Cambia el estado local del checkbox
    onUpdateTarea(tarea.id, updatedTarea); // Actualiza el estado global de la tarea
  };

  return (
    <div>

         {/* Checkbox para marcar como completada */}
        
      
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleCompletionChange} // Cambia el estado de la tarea
        />
    
      {/* Título editable */}
      {isEditingTitle ? (
        <input
          className="textarea"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={handleTitleUpdate} // Guarda cambios al perder foco
          onKeyDown={(e) => e.key === "Enter" && handleTitleUpdate()} // Guarda cambios al presionar Enter
          autoFocus
        />
      ) : (
        <h2 onClick={() => setIsEditingTitle(true)}>{tarea.title}</h2> // Muestra campo de edición al hacer clic
      )}

      {/* Descripción editable */}
      {isEditingDescription ? (
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onBlur={handleDescriptionUpdate} // Guarda cambios al perder foco
          onKeyDown={(e) => e.key === "Enter" && handleDescriptionUpdate()} // Guarda cambios al presionar Enter
          autoFocus
        />
      ) : (
        <p onClick={() => setIsEditingDescription(true)}>{tarea.description}</p> // Muestra campo de edición al hacer clic
      )}

   
    </div>
  );
};

export default ButtonActualizar;
