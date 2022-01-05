<script>
  import '../styles/global.css'
</script>

<header>
  <a href="/"><h1>Album gallery</h1></a>
</header>
<slot/>

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
</style>