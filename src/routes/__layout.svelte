<script>
  import '../styles/global.css'
  import Player from '$lib/Player.svelte'
  import { audioPlayer } from "$lib/stores/player.js";
  $: playing = !!$audioPlayer.name && !!$audioPlayer.artist;
</script>

<svelte:head>
  <meta name="theme-color" content="#1D976C" />
</svelte:head>

<header>
  <a href="/"><h3>Album gallery</h3></a>
  <a href="/about"><h3>About</h3></a>
  <a target="_blank" href="https://pawel-wrzosek.pl"><h3>Author</h3></a>
</header>
<slot/>
<footer>
  <div class="player">
    <Player/>
  </div>
  {#if playing}
    <div class="playInfo">
      <span>Now playing: {$audioPlayer.name} - {$audioPlayer.artist}</span>
    </div>
  {/if}
  <div class="gh">
    <a href="https://github.com/wrzonki/album-gallery">
      <img src="/gh.png" alt="git-hub logo"/>
    </a>
  </div>
</footer>

<style>
  header {
    display: flex;
    justify-content: space-around;
  }
  h3 {
    text-align: center;
    font-size: 900;
    color: #222;
  }
  a {
    text-decoration: none;
    color: #fff;
    text-shadow: 0 0 1px #000;
  }
  footer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    background-color: #fff;
    box-shadow: inset 0 -1px 10px var(--grey);
  }
  footer img {
    width: 100px;
  }
  .gh {
    padding: 10px;
    width: 100%;
    height: 40px;
    background-color: rgba(.26, .26, .26, .1);
  }
  .gh img {
    filter: invert(1) drop-shadow(2px 4px 6px black);
  }
  .player {
    padding: 10px;
  }
  .playInfo {
    margin-bottom: 10px;
  }
</style>