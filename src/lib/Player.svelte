<script>
  import { audioPlayer } from "$lib/stores/player.js";
</script>

<audio
  controls
  loop
  autoplay
  crossorigin="anonymous"
  disabled={!!$audioPlayer.url}
  src={$audioPlayer.url}
  >
  {#if $audioPlayer.url}
    <source src={$audioPlayer.url} type="audio/mpeg">
  {/if}
</audio>