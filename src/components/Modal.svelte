<script>
    export let showModal = false;
</script>

{#if showModal}
<div class="modal-overlay">
    <div class="modal-content">
        <slot></slot>
        <button on:click={() => showModal = false} class="btn btn-error mt-4">Cerrar</button>
    </div>
</div>
{/if}

<style>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: 800px;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
}

/* Ajusta el ancho de la tabla dentro del modal */
.modal-content table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
}

/* Ajusta las columnas para que se distribuyan correctamente */
.modal-content th,
.modal-content td {
    padding: 10px;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* Asegura que la tabla no se salga del modal */
.modal-content .table-container {
    overflow-x: auto;
    max-width: 100%;
}
</style>