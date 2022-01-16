<script>
  import { audioPlayer } from "$lib/stores/player.js";

  let audio;
</script>

<audio controls loop autoplay bind:this={audio} disabled={!!$audioPlayer.previewURL} src={$audioPlayer.previewURL}>
  {#if $audioPlayer.previewURL}
    <source src={$audioPlayer.previewURL} type="audio/mpeg" on:loadeddata={(e) => console.log(e)}>
  {/if}
</audio>