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
