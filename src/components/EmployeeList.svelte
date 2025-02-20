<script>
    import { onMount } from "svelte";
    import { loadFavorites, toggleFavorite, favorites, getEmployees } from "../api.js";
    import { addToFavorites } from "../stores/favorites";
    import SearchBar from "./SearchBar.svelte";

    let employees = [];
    let page = 1;
    let search = "";

    async function fetchEmployees() {
        const data = await getEmployees(page, search);
        employees = data.data || [];
    }

    onMount(fetchEmployees);
</script>

<div class="container">
    <table>
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
                    <img src={employee.company.logo} alt="Logo Empresa" />
                </td>
                <td>{employee.satisfaction_level}%</td>
                <td>
                    <button on:click={() => toggleFavorite(employee)} class="btn-favorite">
                        {favorites.some(fav => fav.id === employee.id) ? "★" : "☆"}
                    </button>
                </td>
            </tr>
            {/each}
        </tbody>
    </table>

    <div class="pagination">
        <button on:click={() => { page--; fetchEmployees(); }} class="btn btn-xs" disabled={page === 1}>Anterior</button>
        <button on:click={() => { page++; fetchEmployees(); }} class="btn btn-xs">Siguiente</button>
    </div>
</div>
