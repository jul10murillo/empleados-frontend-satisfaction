const API_URL = "http://127.0.0.1:8000/api/v1"; // Reemplaza con la URL de tu backend

export async function getEmployees(page = 1, search = "") {
    const url = `${API_URL}/employees?page=${page}&search=${search}`;
    const res = await fetch(url);
    return res.json();
}

/**
 * Obtiene empleados filtrados a través del endpoint /employees/search.
 * @param {number} page - Número de página.
 * @param {string} search - Término de búsqueda.
 * @returns {Promise<object>} La respuesta JSON de la API.
 */
export async function searchEmployees(page = 1, search = "") {
    const url = `${API_URL}/employees/search?page=${page}&search=${encodeURIComponent(search)}`;
    const res = await fetch(url);
    return res.json();
}

export async function addFavorite(employeeId) {
    const res = await fetch(`${API_URL}/employees/favorite`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ employee_id: employeeId }),
    });
    return res.json();
}

export async function removeFavorite(employeeId) {
    const res = await fetch(`${API_URL}/employees/favorite/${employeeId}`, {
        method: "DELETE",
    });
    return res.json();
}

export async function getFavorites() {
    const res = await fetch(`${API_URL}/employees/favorites`);
    return res.json();
}

export let favorites = [];

export async function toggleFavorite(employee) {
    // Aquí suponemos que toggleFavorite en el backend realiza el toggle y retorna un objeto con "status" y "message"
    // En tu lógica, puedes hacer la comprobación a nivel local o simplemente llamar a la función apropiada:
    // Por ejemplo, si el empleado ya está en favoritos, se eliminará; si no, se agregará.
    const currentFavsRes = await getFavorites();
    const currentFavs = currentFavsRes.data || [];
    const isFav = currentFavs.some(fav => fav.id === employee.id);
  
    if (isFav) {
      return await removeFavorite(employee.id);
    } else {
      return await addFavorite(employee.id);
    }
  }

// Cargar favoritos al inicio
export async function loadFavorites() {
    favorites = await getFavorites();
}