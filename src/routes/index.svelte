<script context="module">
  const baseUrl = 'https://jsonplaceholder.typicode.com/albums';

  export const load = async ({ fetch }) => {
    const res = await fetch(baseUrl);
    const albums = await res.json();

    return {
      props: {
        albums
      }
    }
  }
</script>

<script>
  import AlbumCard from '$lib/AlbumCard.svelte';
  export let albums;
</script>

<div class="wrapper">
  {#each albums as album}
    <AlbumCard {...album}/>
  {/each}
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    gap: 20px;
    padding: 20px;
  }
</style>

