<script context="module">
  export async function load() {
    const data = [
      { id: 237, name: 'song 1', url: 'https://pawel-wrzosek.pl/stock-audio/1.mp3' },
      { id: 238, name: 'song 2', url: 'https://pawel-wrzosek.pl/stock-audio/2.mp3' },
      { id: 239, name: 'song 3', url: 'https://pawel-wrzosek.pl/stock-audio/3.mp3' },
      { id: 240, name: 'song 4', url: 'https://pawel-wrzosek.pl/stock-audio/4.mp3' },
      { id: 241, name: 'song 5', url: 'https://pawel-wrzosek.pl/stock-audio/5.mp3' },
      { id: 242, name: 'song 6', url: 'https://pawel-wrzosek.pl/stock-audio/6.mp3' },
      { id: 243, name: 'song 7', url: 'https://pawel-wrzosek.pl/stock-audio/7.mp3' },
      { id: 244, name: 'song 8', url: 'https://pawel-wrzosek.pl/stock-audio/8.mp3' },
      { id: 345, name: 'song 9', url: 'https://pawel-wrzosek.pl/stock-audio/9.mp3' },
      { id: 446, name: 'song 10', url: 'https://pawel-wrzosek.pl/stock-audio/10.mp3' },
    ];

    return {
      props: { data }
    };
  }
</script>

<script>
  import { audioPlayer } from "$lib/stores/player.js";
  export let data;
  $: console.log($audioPlayer)
</script>

<div class="wrapper">
  {#each data as { url, name, id }}
    <div on:click={() => {$audioPlayer = { url, name, id }}}>
      <img src="https://picsum.photos/id/{id}/250" alt="{name}">
      <span>{name}</span>  
    </div>
  {/each}
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    gap: 20px;
    padding: 20px;
  }
  .wrapper div {
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    cursor: pointer;
  }
</style>

