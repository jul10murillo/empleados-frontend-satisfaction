<script>
    import { favorites, removeFromFavorites } from "../stores/favorites";
    import { removeFavorite } from "../api";

    function handleRemove(employeeId) {
        removeFavorite(employeeId);
        removeFromFavorites(employeeId);
    }
</script>

<h2>Favoritos ⭐</h2>
<table border="1" width="100%">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Área</th>
            <th>Categoría</th>
            <th>Empresa</th>
            <th>Logo</th>
            <th>Nivel de Satisfacción</th>
            <th>Acción</th>
        </tr>
    </thead>
    <tbody>
        {#each $favorites as employee}
            <tr>
                <td>{employee.full_name}</td>
                <td>{employee.email}</td>
                <td>{employee.area}</td>
                <td>{employee.category}</td>
                <td>{employee.company.name}</td>
                <td><img src={employee.company.logo} alt="Logo" width="50" height="50" /></td>
                <td>{employee.satisfaction_level}</td>
                <td>
                    <button on:click={() => handleRemove(employee.id)}>❌</button>
                </td>
            </tr>
        {/each}
    </tbody>
</table>