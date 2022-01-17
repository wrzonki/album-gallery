<script>
  import '../styles/global.css'
  import Player from '$lib/Player.svelte'
  import { audioPlayer } from "$lib/stores/player.js";
</script>

<svelte:head>
  <meta name="theme-color" content="#1D976C" />
</svelte:head>

<header>
  <a href="/"><h1>Album gallery</h1></a>
  <a href="/about"><h1>About</h1></a>
  <a href="https://pawel-wrzosek.pl"><h1>Author</h1></a>
</header>
<slot/>
<footer>
  <Player/>
  <span>Now playing: {$audioPlayer.name || 'none'}</span>
  <a href="https://github.com/wrzonki/album-gallery">
    <img src="/gh.png" alt="git-hub logo"/>
  </a>
</footer>

<style>
  header {
    display: flex;
    justify-content: space-around;
  }
  h1 {
    text-align: center;
    font-size: 900;
  }

  a {
    text-decoration: none;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
  }

  footer {
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 0 1px var(--grey);
  }

  footer img {
    width: 100px;
  }
</style>