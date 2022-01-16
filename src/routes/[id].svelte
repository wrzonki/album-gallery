<script context="module">
  export const load = async ({ fetch, params }) => {
    const requestData = async (url) => {
      const res = await fetch(url);
      return await res.json();
    };

    const urls = [
      `https://jsonplaceholder.typicode.com/albums/${params.id}`,
      `https://jsonplaceholder.typicode.com/albums/${params.id}/photos`,
    ];

    const res = await Promise.all(
      urls.map(url => requestData(url))
    );

    const [basicInfo, albumPhotos] = res;

    return {
      props: {
        basicInfo,
        albumPhotos
      }
    }
  }
</script>

<script>
  // import Modal from '$lib/Modal.svelte';

  export let basicInfo;
  export let albumPhotos;
  let modalUrl;
  let modalTitle;
  let showModal = false;

  let toggleModal = ({ title, url }) => {
    showModal = !showModal;
    modalUrl = url;
    modalTitle = title;
  };
</script>

<!-- <Modal {showModal} {modalTitle} {modalUrl} on:removeModal={() => { showModal = !showModal }}/> -->

<div>
  <h3>{basicInfo.title}</h3>
  <div class="wrapper">
    {#each albumPhotos as { thumbnailUrl, title, url }}
      <img src={thumbnailUrl} alt={title} on:click={(e) => toggleModal({ title, url })}/>
    {/each}
  </div>
</div>

<style>
  h3 {
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
  }

  h3::first-letter {
    text-transform: uppercase;
  }

  .wrapper {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat( auto-fit, minmax(150px, 1fr) );
    gap: 5px;
    padding: 5px;
  }

  img {
    cursor: pointer;
  }
</style>