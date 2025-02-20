<script>
    export let search = "";
    export let onSearch;

    function handleInput(event) {
        search = event.target.value;
        onSearch(search); // Llama la función de búsqueda cada vez que se escribe algo
    }
</script>

<input 
    type="text" 
    bind:value={search} 
    placeholder="Buscar empleados..." 
    on:input={handleInput} 
    style="padding: 8px; width: 100%; margin-bottom: 10px;"
/>