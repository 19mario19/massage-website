<script>
  import { Router, Route } from "svelte-routing"
  import logo from "./assets/vite.svg"
  import Navbar from "./components/Navbar.svelte"
  import list from "./data/navigationList"
</script>

<div class="app">
  <Router>
    <Navbar title="Flexible Navbar" {list} {logo} />
    {#each list as item}
      <Route path={item.link} component={item.component} />
      {#each item.children as child}
        <Route path={child.link} component={child.component} />
      {/each}
    {/each}
  </Router>
</div>

<style>
  .app {
  display: flex;
  flex-direction: column;
}



</style>
