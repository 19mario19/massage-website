<script>
  import { Router, Route } from "svelte-routing"
  import Navbar from "./components/Navbar.svelte"
  import list from "./data/navigationList"
  import BookOnline from "./components/BookOnline.svelte"
  import Footer from "./components/Footer.svelte"
  import Product from "./pages/Product.svelte"
  
</script>


  <div class="app">
    <Router>
      <BookOnline />
      <Navbar {list} />
      {#each list as item}
        <Route path={item.link} component={item.component} />
      {/each}
      <Route path={"/product/:name"} component={Product} />
      <!-- create not found page -->
      <Footer />
    </Router>
  </div>


<style>
  :root {
    --bg-color: #e2ab9c;
    --text-color: #666666;
  }
  .app {
    display: flex;
    flex-direction: column;
    background-color: var(--bg-color);
    color: var(--text-color);
  }
</style>
