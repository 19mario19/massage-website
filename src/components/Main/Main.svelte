<script>
  import MainContactUs from "./MainContactUs.svelte"
  import MainDescription from "./MainDescription.svelte"
  import MainTestimonials from "./MainTestimonials.svelte"
  import MainTop from "./MainTop.svelte"
  import MainUSP from "./MainUSP.svelte"
</script>

<div class="main">
  <MainTop />
  <MainDescription />
  <MainUSP />
  <MainTestimonials />
  <MainContactUs />
</div>

<style>
  .main {
    display: flex;
    flex-direction: column;
  }
</style>
