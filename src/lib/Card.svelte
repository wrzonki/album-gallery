<script>
  import { audioPlayer } from "$lib/stores/player.js";
  export let url;
  export let name;
  export let id;
  export let artist;
  export let image;
</script>

<div
  id="card"
  on:click={() => {$audioPlayer = { url, name, id, artist, image }}}
  >
  <img
    src={image}
    alt={name}
    class={$audioPlayer.id === id ? '' : 'grayscale'}
  >
  <div
    id="content"
    class={$audioPlayer.id === id ? 'active' : ''}
    >
    {name} - {artist}
  </div>
</div>

<style>
  #card {
    width: 250px;
    height: 250px;
    background-image: var(--bg-image);
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 0px 0px rgba(0,0,0,0);
    transition: all ease-in-out .3s;
    overflow: hidden;
    transform: scale(1);
  }
  #card:hover {
    box-shadow: -5px 5px 10px rgba(0,0,0,0.2);
    transform: scale(1.04);
  }
  #content {
    position: absolute;
    width: 100%;
    height: 20%;
    bottom: 0;
    background-color: rgba(255,255,255,0.65);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .grayscale {
    filter: grayscale(100%);
  }
  .active {
    background-color: #64dd17 !important;
    color: #fff;
    text-shadow: 0 0 1px rgba(0,0,0,.1);
  }
</style>