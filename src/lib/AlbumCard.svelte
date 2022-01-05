<script>
  export let id;
  export let title
</script>

<a href="/{id}" sveltekit:prefetch>
  <div class="card">
    <h4>{title}</h4>
  </div>
</a>

<style>
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: auto;
    aspect-ratio: 3 / 2;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 0 3px var(--grey);
    border-radius: 5px;
    transition: all .2s ease-in-out;
    will-change: box-shadow;
  }

  .card:hover {
    box-shadow: 0 0 8px var(--grey);
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  h4::first-letter {
    text-transform: uppercase;
  }
</style>