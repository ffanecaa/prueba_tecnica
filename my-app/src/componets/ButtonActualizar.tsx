import { useState } from "react";
import { Tarea } from "../hooks/UseTareas";

interface ButtonActualizarProps {
  tarea: Tarea;
  onUpdateTarea: (id: number, updatedTarea: Tarea) => void;
}

const ButtonActualizar: React.FC<ButtonActualizarProps> = ({
  tarea,
  onUpdateTarea,
}) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [error, setError] = useState<string>("");
  const [title, setTitle] = useState(tarea.title);
  const [description, setDescription] = useState(tarea.description);
  const [isCompleted, setIsCompleted] = useState(tarea.isCompleted);




  //manejador titulo
  const handleTitleUpdate = () => {
    const updatedTarea = { ...tarea, title };
    onUpdateTarea(tarea.id, updatedTarea);
    setIsEditingTitle(false);
  };


  //manejador descripcion 
  const handleDescriptionUpdate = () => {
 
  if (description.length < 10) {
    setError("La descripción debe tener al menos 10 caracteres. los cambios no se guardarán");
    return;
  }

  setError(""); 
  const updatedTarea = { ...tarea, description };
  onUpdateTarea(tarea.id, updatedTarea);
  setIsEditingDescription(false);
};

   
  // manejador checkbox

  const handleCompletionChange = () => {
    const updatedTarea = { ...tarea, isCompleted: !isCompleted };
    setIsCompleted(!isCompleted); 
    onUpdateTarea(tarea.id, updatedTarea); 
  };

  return (
    <div>
      {/* Checkbox para marcar como completada */}

      <input
        type="checkbox"
        checked={isCompleted}
        onChange={handleCompletionChange}
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
        <h2 className="title" onClick={() => setIsEditingTitle(true)}>
          {tarea.title}
        </h2>
      )}

      {/* Descripción editable */}
      {isEditingDescription ? (
        <>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onBlur={handleDescriptionUpdate} // Guarda cambios al perder foco
            onKeyDown={(e) => e.key === "Enter" && handleDescriptionUpdate()} // Guarda cambios al presionar Enter
            autoFocus
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
        </>
      ) : (
        <p className="text" onClick={() => setIsEditingDescription(true)}>
          {tarea.description}
        </p>
        
      )}
    </div>
  );
};

export default ButtonActualizar;
