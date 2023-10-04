<script>
  import TherapistsDescription from "./TherapistsDescription.svelte"
  import TherapistsList from "./TherapistsList.svelte"
  import TherapistsTop from "./TherapistsTop.svelte"
</script>

<div class="therapists">
  <TherapistsTop />
  <TherapistsDescription />
  <TherapistsList />
</div>

<style>
  .therapists {
    display: flex;
    flex-direction: column;
  }
</style>

