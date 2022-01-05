<script>
  import '../styles/global.css'
</script>

<header>
  <a href="/"><h1>Album gallery</h1></a>
</header>
<slot/>
<footer>
  <a href="https://github.com/wrzonki/album-gallery">
    <img src="/gh.png" alt="git-hub logo"/>
  </a>
</footer>

<style>
  h1 {
    text-align: center;
    font-size: 900;
    font-style: italic;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  footer {
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