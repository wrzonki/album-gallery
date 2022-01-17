<script>
  import { audioPlayer } from "$lib/stores/player.js";
  let audio;
</script>

<audio controls loop autoplay crossorigin="anonymous" bind:this={audio} disabled={!!$audioPlayer.url} src={$audioPlayer.url}>
  {#if $audioPlayer.url}
    <source src={$audioPlayer.url} type="audio/mpeg" on:loadeddata={(e) => console.log(e)}>
  {/if}
</audio>