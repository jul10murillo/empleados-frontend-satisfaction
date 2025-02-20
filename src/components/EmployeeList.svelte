<script>
    import { onMount } from "svelte";
    import { getEmployees, toggleFavorite, getFavorites } from "../api.js";
  
    let employees = [];
    let page = 1;
    let search = "";
    let favoritesData = []; // Variable local para almacenar favoritos (array de objetos)
    
    // Variables para el toast
    let toastMessage = "";
    let showToast = false;
    let toastType = "success"; // "success", "error", etc.
  
    // Cargar empleados desde la API
    async function fetchEmployees() {
        console.log("Fetching employees with search term:", search);
      const data = await getEmployees(page, search);
      employees = data.data || [];
    }
  
    // Cargar la lista de favoritos desde la API
    async function loadFavoritesData() {
      const res = await getFavorites();
      // Se asume que la respuesta es { data: [...], count: number }
      favoritesData = res.data || [];
    }
  
    // Función para hacer toggle de favorito (agregar o eliminar)
    async function handleToggleFavorite(employee) {
      // Llamar a toggleFavorite (esta función debe retornar un objeto con status y message)
      const res = await toggleFavorite(employee);
      // Actualizar la lista de favoritos desde el backend para tener la data actual
      await loadFavoritesData();
      
      // Mostrar toast con la respuesta
      toastMessage = res.message;
      toastType = res.status; // se espera que res.status sea "success" o "error"
      showToast = true;
      setTimeout(() => {
        showToast = false;
      }, 3000);
    }
  
    // Al montar el componente, carga empleados y favoritos
    onMount(async () => {
      await fetchEmployees();
      await loadFavoritesData();
    });
  </script>
  
  <div class="container mx-auto p-4">
    <table class="table w-full table-zebra">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Área</th>
          <th>Categoría</th>
          <th>Empresa</th>
          <th>Logo</th>
          <th>Nivel de Satisfacción</th>
          <th>Favorito</th>
        </tr>
      </thead>
      <tbody>
        {#each employees as employee}
          <tr>
            <td>{employee.full_name}</td>
            <td>{employee.email}</td>
            <td>{employee.area}</td>
            <td>{employee.category}</td>
            <td>{employee.company.name}</td>
            <td>
              <img src={employee.company.logo} alt="Logo Empresa" class="w-10 h-10 rounded-full" />
            </td>
            <td>{employee.satisfaction_level}%</td>
            <td>
              <button on:click={() => handleToggleFavorite(employee)} class="btn btn-circle btn-outline btn-warning">
                {favoritesData.some(fav => fav.id === employee.id) ? "★" : "☆"}
              </button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  
    <div class="pagination flex justify-between mt-4">
      <button on:click={() => { page--; fetchEmployees(); }} class="btn btn-xs" disabled={page === 1}>Anterior</button>
      <button on:click={() => { page++; fetchEmployees(); }} class="btn btn-xs">Siguiente</button>
    </div>
  </div>