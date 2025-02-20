<script>
    import { onMount, createEventDispatcher } from "svelte";
    import { getFavorites, removeFavorite } from "../api";
    const dispatch = createEventDispatcher();
    
    // Variable para almacenar los favoritos
    let favData = [];
  
    onMount(async () => {
      const result = await getFavorites();
      console.log("Favoritos recibidos:", result);
      // Asegúrate de tomar el array correcto:
      favData = result.data || [];
    });
  
    async function removeFav(employeeId) {
      // Llamamos a la función API para eliminar el favorito.
      const response = await removeFavorite(employeeId);
      console.log("Respuesta al eliminar favorito:", response);
      if (response.status === "success") {
        // Actualizamos localmente la lista de favoritos
        favData = favData.filter(emp => emp.id !== employeeId);
      } else {
        console.error("Error al eliminar favorito:", response.message);
      }
    }
  
    function closeModal() {
      dispatch("closeModal");
    }
  </script>
  
  <h2 class="text-xl font-bold mb-4">Favoritos ⭐</h2>
  
  {#if favData.length > 0}
    <table class="table w-full">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Área</th>
          <th>Categoría</th>
          <th>Nivel</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {#each favData as fav}
          <tr>
            <td>{fav.full_name}</td>
            <td>{fav.email}</td>
            <td>{fav.area}</td>
            <td>{fav.category}</td>
            <td>{fav.satisfaction_level}%</td>
            <td>
              <button class="btn btn-error btn-xs" on:click={() => removeFav(fav.id)}>
                Eliminar
              </button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  {:else}
    <p>No hay favoritos agregados.</p>
  {/if}