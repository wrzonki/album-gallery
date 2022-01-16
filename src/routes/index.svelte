<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(`https://api.napster.com/v2.1/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm`);
    const data = await res.json();

    console.log(data);

    if (res.ok) {
      return {
        props: { data }
      };
    }

    return {
      status: 301,
      redirect: '/',
    };
  }
</script>

<script>
  import { audioPlayer } from "$lib/stores/player.js";

  console.log($audioPlayer);
  export let data;
</script>

<div class="wrapper">
  {#each data.tracks as song}
    <div on:click={() => {$audioPlayer = song}}>
      <span>album name: {song.albumName}</span>  
      <span>artist: {song.artistName}</span>  
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
  }
</style>

