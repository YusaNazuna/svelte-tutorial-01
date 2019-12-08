
<script>
  export let title;
  export let contents;
</script>

<section>
  <div class="title">{title}</div>
  <div class="contents">{@html contents}</div>
</section>

<style>
  section {
    width: 100%;
    height: 100%;
		overflow-wrap: break-word;
  }

  .title {
    font-size: 1.8rem;
    font-weight: bold;
    padding: 1rem 0;
  }

</style>