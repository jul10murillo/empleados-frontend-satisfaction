<script>
  import EmployeeList from "./components/EmployeeList.svelte";
  import FavoriteList from "./components/FavoriteList.svelte";
  import Modal from "./components/Modal.svelte";

  let showFavorites = false;
</script>

<header class="flex justify-between items-center p-4 bg-gray-900 text-white">
<h1 class="text-xl font-bold">Seguimiento de Empleados 📊</h1>
<button class="btn btn-primary" on:click={() => showFavorites = true}>Ver Favoritos</button>
</header>

<EmployeeList />

<Modal bind:showModal={showFavorites}>
  <FavoriteList />
</Modal>