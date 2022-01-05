<script>
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  export let showModal = false;
  export let modalUrl;
  export let modalTitle;

  const handleClick = () => {
    dispatch('removeModal');
  };
</script>

{#if showModal}
  <div class="backdrop" on:click|self={handleClick}>
    <div class="modal">
      <img src={modalUrl} alt={modalTitle} />
    </div>
  </div>
{/if}

<style>
  .backdrop{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
  }
  .modal{
    width: fit-content;
    max-width: 70vw;
    max-height: 70vh;
    aspect-ratio: 1 / 1;
    margin: 10% auto;
    overflow: hidden;
    border-radius: 10px;
    text-align: center;
    background: white;
  }

  img {
    max-width: 100%;;
  }
</style>