<script>
  import EmployeeList from "./components/EmployeeList.svelte";
  import FavoriteList from "./components/FavoriteList.svelte";
  import Modal from "./components/Modal.svelte";

  // Variable reactiva para mostrar u ocultar el modal
  let showFavorites = false;

  // Función para abrir el modal
  function openFavorites() {
    showFavorites = true;
  }

  // Función para cerrar el modal
  function closeFavorites() {
    showFavorites = false;
  }
</script>

<header class="flex items-center justify-between p-4 bg-gray-900 text-white">
  <h1 class="text-2xl font-bold">Seguimiento de Empleados 📊</h1>
  <button class="btn btn-accent" on:click={openFavorites}>
    Ver Favoritos
  </button>
</header>

<!-- Lista de empleados -->
<EmployeeList />

<!-- Modal para mostrar la lista de favoritos -->
<Modal bind:showModal={showFavorites}>
  <!-- Dentro del modal, cargamos la lista de favoritos -->
  <FavoriteList on:closeModal={closeFavorites} />
</Modal>