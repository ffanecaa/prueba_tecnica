import  { useEffect } from 'react';
import { useTareas } from '../hooks/UseTareas';
import ButtonActualizar from './ButtonActualizar';
import ButtonEliminar from './ButtonEliminar';
import '../styles/tareaList.css';
import Formulario from './Formulario';

const TareasList = () => {
  const { tareas, fetchTareas, updateTarea, deleteTarea } = useTareas();

  useEffect(() => {
    fetchTareas();
  }, [fetchTareas]);

  const handleUpdateTarea = async (id: number, updatedTarea: any) => {
    await updateTarea(id, updatedTarea);
  };

  return (
    <div className='container_list'>
      <section className='section_list'>
        <Formulario />
        {tareas.map((tarea) => (
          <article className='article_list' key={tarea.id}>
            <div className="container_title">
            
              <ButtonActualizar tarea={tarea} onUpdateTarea={handleUpdateTarea} />
            </div>
           
            <ButtonEliminar onClick={() => deleteTarea(tarea.id)} />
          </article>
        ))}
      </section>
    </div>
  );
};

export default TareasList;
