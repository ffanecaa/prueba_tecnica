import  { useEffect } from 'react';
import { useTareas } from '../hooks/UseTareas';
const TareasList = () => {
  const { tareas, fetchTareas, createTarea, updateTarea, deleteTarea } = useTareas();

  useEffect(() => {
    fetchTareas(); 
  }, []);

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            <h2>{tarea.title}</h2>
            <p>{tarea.description}</p>
            <button onClick={() => updateTarea(tarea.id, { ...tarea, isCompleted: !tarea.isCompleted })}>
              {tarea.isCompleted ? 'Marcar como pendiente' : 'Marcar como completada'}
            </button>
            <button onClick={() => deleteTarea(tarea.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={() => createTarea({  title: 'Nueva Tarea', description: 'Descripción', isCompleted: false })}>
        Crear tarea
      </button>
    </div>
  );
};

export default TareasList;
