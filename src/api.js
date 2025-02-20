const API_URL = "http://127.0.0.1:8000/api/v1"; // Reemplaza con la URL de tu backend

export async function getEmployees(page = 1, search = "") {
    const url = `${API_URL}/employees?page=${page}&search=${search}`;
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
    const res = await fetch(`${API_URL}/employees/favorites/${employeeId}`, {
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
    const isFav = favorites.some(fav => fav.id === employee.id);

    if (isFav) {
        await removeFavorite(employee.id);
        favorites = favorites.filter(fav => fav.id !== employee.id); // Remueve de la lista reactiva
    } else {
        const newFav = await addFavorite(employee.id);
        favorites = [...favorites, { ...employee, id: newFav.id }]; // Agrega a la lista reactiva
    }
}

// Cargar favoritos al inicio
export async function loadFavorites() {
    favorites = await getFavorites();
}