<script>
  import ApplyForm from "./ApplyForm.svelte"
  import ApplyTop from "./ApplyTop.svelte"
</script>

<div class="apply">
  <ApplyTop />
  <ApplyForm />
</div>

<style>
  .apply {
    display: flex;
    flex-direction: column;
  }
</style>
