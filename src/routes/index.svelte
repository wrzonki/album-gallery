<script context="module">
  export async function load() {
    const data = [
      { id: 237, image: 'https://picsum.photos/id/237/250', artist: 'Artist 1', name: 'Track 1', url: 'https://pawel-wrzosek.pl/stock-audio/1.mp3' },
      { id: 238, image: 'https://picsum.photos/id/238/250', artist: 'Artist 2', name: 'Track 2', url: 'https://pawel-wrzosek.pl/stock-audio/2.mp3' },
      { id: 239, image: 'https://picsum.photos/id/239/250', artist: 'Artist 3', name: 'Track 3', url: 'https://pawel-wrzosek.pl/stock-audio/3.mp3' },
      { id: 240, image: 'https://picsum.photos/id/240/250', artist: 'Artist 4', name: 'Track 4', url: 'https://pawel-wrzosek.pl/stock-audio/4.mp3' },
      { id: 241, image: 'https://picsum.photos/id/241/250', artist: 'Artist 5', name: 'Track 5', url: 'https://pawel-wrzosek.pl/stock-audio/5.mp3' },
      { id: 242, image: 'https://picsum.photos/id/242/250', artist: 'Artist 6', name: 'Track 6', url: 'https://pawel-wrzosek.pl/stock-audio/6.mp3' },
      { id: 243, image: 'https://picsum.photos/id/243/250', artist: 'Artist 7', name: 'Track 7', url: 'https://pawel-wrzosek.pl/stock-audio/7.mp3' },
      { id: 244, image: 'https://picsum.photos/id/244/250', artist: 'Artist 8', name: 'Track 8', url: 'https://pawel-wrzosek.pl/stock-audio/8.mp3' },
      { id: 345, image: 'https://picsum.photos/id/345/250', artist: 'Artist 9', name: 'Track 9', url: 'https://pawel-wrzosek.pl/stock-audio/9.mp3' },
      { id: 446, image: 'https://picsum.photos/id/446/250', artist: 'Artist 10', name: 'Track 10', url: 'https://pawel-wrzosek.pl/stock-audio/10.mp3' },
    ];

    return {
      props: { data }
    };
  }
</script>

<script>
  import { audioPlayer } from "$lib/stores/player.js";
  import Card from '$lib/Card.svelte';
  export let data;
</script>

<div class="wrapper">
  {#each data as d}
    <Card {...d}/>
  {/each}
</div>

<style>
  .wrapper {
    justify-items: center;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    gap: 20px;
    padding: 20px 0 250px 0;
  }
</style>

