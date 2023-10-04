<script>
  import MassageList from "./MassageList.svelte"
  import MassageTop from "./MassageTop.svelte"
  import Packages from "./Packages.svelte"
</script>

<div class="massage">
  <MassageTop />
  <MassageList />
  <Packages />
</div>

<style>
  .massage {
    display: flex;
    flex-direction: column;
  }
</style>
