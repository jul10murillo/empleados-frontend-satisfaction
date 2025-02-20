# Employee Satisfaction Frontend

Este es el frontend de la aplicación de seguimiento de la satisfacción de empleados, que permite visualizar, buscar y gestionar empleados, así como administrar una lista de favoritos.

## 🚀 Tecnologías utilizadas

- **Svelte** - Framework de frontend
- **Tailwind CSS + DaisyUI** - Estilización y diseño
- **Vite** - Entorno de desarrollo rápido
- **Fetch API** - Para la comunicación con el backend

## 📦 Instalación y configuración

### 1️⃣ Clonar el repositorio:

```bash
git clone https://github.com/jul10murillo/empleados-frontend-satisfaction.git
cd empleados-frontend-satisfaction

2️⃣ Instalar dependencias:
npm install

3️⃣ Configurar la URL del backend:
Editar el archivo src/api.js y asegurarse de que la URL de la API sea correcta:
const API_URL = "http://127.0.0.1:8000/api/v1"; // Reemplázala si es necesario


4️⃣ Ejecutar el proyecto en modo desarrollo:

npm run dev

El frontend estará disponible en http://localhost:5173 (puedes verificar en la terminal la URL exacta).


📌 Funcionalidades principales

✅ Visualización de empleados - Muestra una lista paginada con información de los empleados.
✅ Búsqueda - Filtra empleados por cualquier propiedad (nombre, correo, área, etc.).
✅ Favoritos - Permite agregar y eliminar empleados de la lista de favoritos.
✅ Interfaz moderna - Utiliza Tailwind CSS y DaisyUI para un diseño limpio y accesible.

📂 Estructura del Proyecto

empleados-frontend-satisfaction/
│── src/
│   ├── components/          # Componentes reutilizables (EmployeeList, FavoriteList, SearchBar, Modal)
│   ├── stores/              # Estado global (favoritos)
│   ├── api.js               # Llamadas a la API
│   ├── app.css              # Estilos globales
│   ├── App.svelte           # Componente principal
│── public/
│── index.html
│── package.json
│── README.md