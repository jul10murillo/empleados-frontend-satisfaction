import { writable } from "svelte/store";
import { getFavorites } from "../api";

export const favorites = writable([]);

export async function loadFavorites() {
    const data = await getFavorites();
    favorites.set(data);
}

export function addToFavorites(employee) {
    favorites.update((list) => [...list, employee]);
}

export function removeFromFavorites(employeeId) {
    favorites.update((list) => list.filter(emp => emp.id !== employeeId));
}