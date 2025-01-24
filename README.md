# Proyecto de Gestión de Tareas con .NET Core, Entity Framework Core y React

Este proyecto implementa una aplicación de gestión de tareas con un backend en **.NET Core** utilizando **Entity Framework Core** con una base de datos en memoria. El frontend está construido con **React** y **TypeScript** utilizando **Vite** como bundler. Este sistema permite crear, leer, actualizar y eliminar tareas a través de una API RESTful.

Además, el proyecto incluye **Swagger**.

## Tecnologías Utilizadas

- **Backend**: 
  - **.NET 8 (Core)** para la creación de la API.
  - **Entity Framework Core** para la interacción con la base de datos en memoria.
  - **Swagger** para la documentación de la API.
  
- **Frontend**:
  - **React** con **TypeScript**.
  - **Vite** como bundler.
  
- **Base de Datos**: Base de datos en memoria proporcionada por **Entity Framework Core** (solo para desarrollo).

## Requisitos

### Requisitos para el Backend

- [**.NET SDK 8**](https://dotnet.microsoft.com/download) instalado en tu máquina.
  
### Requisitos para el Frontend

- **Navegador web**: Cualquier navegador moderno como Google Chrome, Firefox o Edge.
- **Editor de código**: Recomendamos usar **Visual Studio Code** o cualquier editor compatible con **TypeScript**.

- ## Instalación

### Backend: Configuración del Proyecto .NET Core

1. Clona este repositorio en tu máquina:

    ```bash
    git clone https://github.com/ffanecaa/prueba_tecnica.git
    ```

2. Navega a la carpeta del proyecto backend:

    ```bash
    cd ToDoListApi
    ```

3. Restaura las dependencias del proyecto:

    ```bash
    dotnet restore
    ```

4. Ejecuta el servidor de desarrollo:

    ```bash
    dotnet run
    ```

   La API estará disponible en `https://localhost:5001`.

---

### Frontend: Configuración de React con Vite

1. Navega a la carpeta del frontend:

    ```bash
    cd my-app
    ```

2. Instala las dependencias de Node.js (si no las tienes instaladas, necesitarás Node.js):

    ```bash
    npm install
    ```

3. Inicia el servidor de desarrollo de Vite:

    ```bash
    npm run dev
    ```

   El frontend estará disponible en `http://localhost:5173`.

## Backend: API RESTful

### Endpoints Disponibles
La API proporciona los siguientes endpoints para la gestión de tareas:

- `GET /api/tareas`: Obtiene la lista de todas las tareas.
- `GET /api/tareas/{id}`: Obtiene los detalles de una tarea por su ID.
- `POST /api/tareas`: Crea una nueva tarea.
- `PUT /api/tareas/{id}`: Actualiza una tarea existente.
- `DELETE /api/tareas/{id}`: Elimina una tarea por su ID.

### Swagger para Documentación de la API
Swagger está configurado para documentar la API. Puedes acceder a la documentación interactiva de Swagger navegando a:

https://localhost:5001/swagger/index.html

Swagger proporciona una interfaz gráfica para explorar y probar los endpoints de la API sin necesidad de usar herramientas externas como Postman.

### Configuración de la Base de Datos en Memoria
La base de datos está configurada como una base de datos en memoria utilizando Entity Framework Core. Los datos se perderán cuando se detenga la aplicación, ya que la base de datos reside en la memoria durante la ejecución.

---

## Decisiones Técnicas

### Backend

1. **Tecnología**:
   - .NET Core se eligió por su rendimiento, escalabilidad y compatibilidad multiplataforma, lo que facilita el desarrollo de aplicaciones modernas.

2. **ORM**:
   - Entity Framework Core (EF Core) se utiliza como ORM para interactuar con la base de datos. Permite trabajar con objetos C# en lugar de escribir SQL manualmente. En este proyecto, se ha usado una base de datos InMemory para desarrollo y pruebas rápidas.

3. **Diseño API RESTful**:
   - La API sigue principios RESTful para estructurar las rutas y operaciones:
     - **GET**: Obtener todas las tareas o una tarea específica.
     - **POST**: Crear una nueva tarea.
     - **PUT**: Actualizar una tarea existente.
     - **DELETE**: Eliminar una tarea.

4. **Manejo de errores**:
   - Se gestionan errores como BadRequest y NotFound con mensajes claros, proporcionando respuestas apropiadas a los clientes con códigos HTTP adecuados (ej. 400 Bad Request, 404 Not Found).

5. **Inyección de dependencias**:
   - Se utilizó la inyección de dependencias para pasar el contexto de la base de datos al controlador, mejorando la modularidad y facilitando las pruebas.

6. **Swagger**:
   - Swagger se integra para generar documentación interactiva de la API, permitiendo a los desarrolladores probar los endpoints directamente desde el navegador.

7. **Asincronía**:
   - Las operaciones de base de datos se realizan de manera asincrónica para mejorar el rendimiento y evitar bloqueos durante la ejecución de consultas.

8. **Modelo de recursos**:
   - Las tareas se gestionan como recursos con propiedades como id, title, description y isCompleted, expuestos a través de los endpoints de la API.

---

### Frontend

1. **Tecnología**:
   - React se eligió como biblioteca principal para el desarrollo frontend debido a su rendimiento, facilidad de uso y popularidad en el desarrollo de interfaces interactivas.
   - TypeScript se implementa para mejorar la seguridad de tipos y la mantenibilidad del código, lo que facilita el desarrollo y la detección temprana de errores.

2. **Vite**:
   - Vite se utiliza como bundler debido a su rapidez en el proceso de construcción y recarga en caliente, lo que mejora la experiencia de desarrollo. Vite también es compatible con TypeScript de manera predeterminada.

3. **Gestión de Estado**:
   - Se maneja el estado local en los componentes usando React Hooks (`useState`). Para la gestión de la lógica de actualización de tareas, se pasan funciones de callback (`onUpdateTarea`) entre los componentes.

4. **Estilos**:
    CSS dada la poca complejidad de la app no se opta por Tailwind 

6. **Componente de Edición**:
   - La funcionalidad de editar tareas se implementa con un enfoque basado en el estado de cada campo. Cuando el usuario hace clic sobre el título o descripción de la tarea, estos se convierten en campos de entrada (input o textarea) donde el usuario puede modificar el contenido.
   - Condicionales de renderizado se utilizan para alternar entre la vista de solo texto y la vista de edición, permitiendo una experiencia interactiva.

7. **Validación de Entrada**:
   - La validación de la entrada para los campos de descripción y título se realiza en el frontend, asegurando que la descripción tenga un mínimo de 10 caracteres antes de permitir que el usuario guarde la tarea.

9. **Comunicación con el Backend**:
   - La interacción con el backend se realiza a través de `fetch`  para hacer solicitudes a la API RESTful.


