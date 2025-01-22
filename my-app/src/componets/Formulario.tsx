
import { useTareas, Tarea } from '../hooks/UseTareas';
import React, { useState } from 'react';
const Formulario = () => {
    const { createTarea } = useTareas();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);


  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value);
  const handleIsCompletedChange = (e: React.ChangeEvent<HTMLInputElement>) => setIsCompleted(e.target.checked);

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

 
    setTitle('');
    setDescription('');
    setIsCompleted(false);
  };

  return (
    <div>
      <h2>Crear Tarea</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Descripción:</label>
          <input
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

export default Formulario
