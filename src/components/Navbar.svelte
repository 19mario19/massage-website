<script>
  import { Link } from "svelte-routing"
  import logoBackup from "../assets/vite.svg"

  export let title = "Title"
  export let logo = ""
  export let list = []
  export let setGap = 2
  let toggle = true
  let active = list[0]?.id || 0
  const changeActive = (id) => (active = id)
  const toggleNavigation = () => (toggle = !toggle)

  function handleResize() {
    if (window.innerWidth < 650) {
      toggle = false
    }
  }

  // Add the resize event listener
  window.addEventListener("resize", handleResize)

  let inlineStyles = `--gap:${setGap}rem;`
</script>

<header style={inlineStyles} class="primary-header flex">
  <Link class="flex" to="/">
    <div class="title-logo flex align-center gap-05">
      <img class="logo" src={logo ? logo : logoBackup} alt="logo" />
      <h1 class="title">{title}</h1>
    </div>
  </Link>

  <button
    on:click={toggleNavigation}
    class="mobile-nav-toggle"
    aria-controls="primary-navigation"
    aria-expanded={toggle}
  >
    <span>{toggle ? "x" : "≡"} </span>
  </button>

  <nav>
    {#if list.length > 0}
      <ul data-visible={toggle} class="primary-navigation flex">
        {#each list as item, index (item.id)}
          <div class="parent">
            <li class:active={item.id === active}>
              <Link
                to={item.link}
                on:click={() => changeActive(item.id)}
                on:keydown={(e) => {
                  if (e.key === "Enter") {
                    changeActive(item.id)
                  }
                }}
              >
                {item.name}
              </Link>
            </li>
            {#if item.children.length > 0}
              <div class="sub-menu">
                {#each item.children as child, index (child.id)}
                  <li class:active={child.id === active}>
                    <Link
                      to={child.link}
                      on:click={() => changeActive(child.id)}
                      on:keydown={(e) => {
                        if (e.key === "Enter") {
                          changeActive(child.id)
                        }
                      }}
                    >
                      {child.name}
                    </Link>
                  </li>
                {/each}
              </div>
            {/if}
          </div>
        {/each}
      </ul>
    {/if}
  </nav>
</header>

<style>
  /* Import the fonts */
  @import url("https://fonts.googleapis.com/css?family=Roboto");
  @import url("https://fonts.googleapis.com/css?family=Open+Sans");
  @import url("https://fonts.googleapis.com/css?family=Lato");
  @import url("https://fonts.googleapis.com/css?family=Montserrat");
  @import url("https://fonts.googleapis.com/css?family=Raleway");
  @import url("https://fonts.googleapis.com/css?family=Playfair+Display");
  @import url("https://fonts.googleapis.com/css?family=Nunito");
  @import url("https://fonts.googleapis.com/css?family=Poppins");
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");
  @import url("https://fonts.googleapis.com/css?family=Pacifico");

  :root {
    --color-orchid: #da70d6; /* Orchid */
    --color-crimson: #dc143c; /* Crimson */
    --color-turquoise: #40e0d0; /* Turquoise */
    --color-slateblue: #6a5acd; /* Slate Blue */
    --color-coral: #ff6b6b; /* Coral */
    --color-chartreuse: #7fff00; /* Chartreuse */
    --color-indigo: #4b0082; /* Indigo */
    --color-magenta: #ff00ff; /* Magenta */
    --color-olivedrab: #6b8e23; /* Olive Drab */
    --color-cadetblue: #5f9ea0; /* Cadet Blue */

    --color-primary: #6a5acd; /* Primary color */
    --color-secondary: #ff6b6b; /* Secondary color */
    --color-text: #ffffff; /* Text color */
    --gap: 2rem;

    --inset: 0 0 0 30%;
  }

  /* Sub menu */
  .parent {
    position: relative;
  }

  /* Initialy do not display */

  .sub-menu {
    display: none;
  }

  /* Activate when hoovingring over the parent  */

  .primary-navigation .parent:hover .sub-menu {
    display: flex;
    position: absolute;
    top: 100%;
    left: -15px;
    flex-direction: column;
    background-color: var(--color-indigo);
    gap: 0.1rem;
    padding: 1rem;
    z-index: 100;
  }

  /* Utility classes */

  .flex {
    display: flex;
    gap: var(--gap);
  }

  .align-items-center {
    align-items: center;
  }

  .justifi-content-center {
    justify-content: center;
  }

  .align-center {
    align-items: center;
    justify-content: center;
  }

  .gap-05 {
    gap: 0.5rem;
  }

  .gap-1 {
    gap: 1rem;
  }

  .gap-2 {
    gap: 2rem;
  }

  /* End utility classes */

  .active {
    background-color: var(--color-olivedrab);
    border-radius: 6px;
    transition: all 350ms ease-in-out;
    color: white;
  }

  header {
    background-color: var(--color-indigo);
  }

  .title-logo {
    align-items: center;
      letter-spacing: 3px;
  }

  /* primary header */

  .logo {
    margin: 2rem;
    max-width: 50px;
    aspect-ratio: 1;
  }

  .mobile-nav-toggle {
    display: none;
  }

  .primary-header {
    font-family: "Pacifico", cursive;
  
    align-items: center;
    justify-content: space-between;
    color: white;
  }

  .primary-navigation {
    font-size: 25px;
    padding: 2rem;
    backdrop-filter: blur(2rem);
    font-family: "Playfair Display", serif;
    font-family: "Open Sans", sans-serif;
    font-family: "Raleway", sans-serif;
    font-family: "Pacifico", cursive;
  }

  .primary-navigation li {
    padding: 0.1rem 0.2rem;
  }

  .primary-navigation li:hover {
    background-color: var(--color-cadetblue);

    z-index: 100;

    background-color: var(--color-cadetblue);

    transition: all 350ms ease-in-out;
    color: white;
  }

  .active:hover {
    opacity: 0.9;
    transition: all 350ms ease-in-out;
  }

  li {
    border-radius: 6px;
  }

  @media only screen and (max-width: 650px) {
    h1 {
      font-size: 24px;
    }

    .logo {
      margin: 1rem 0.5rem 1rem 2rem;
    }

    .title-logo {
      gap: 0.1rem;
    }

    /* Change here how the navigation works  */
    .primary-navigation {
      
      position: fixed;
      z-index: 1000;
      inset: var(--inset);
      flex-direction: column;
      padding: min(30vh, 10rem) 2rem;
      color: white;
      color: black;

      font-size: 28px;

      letter-spacing: 3px;

      align-items: center;

      transition: all 350ms ease-in-out;

      transform: translateX(100%);
    }

    .primary-navigation[data-visible="true"] {
      transform: translateX(0);
    }

    .mobile-nav-toggle {
      position: absolute;
      z-index: 9999;
      width: 1rem;
      aspect-ratio: 1;
      top: 0.7rem;
      right: 2rem;

      display: block;

      font-size: 30px;
      color: white;
    }

    /* Sub menu in mobile mode */
    .parent {
      position: relative;

      /* border: 1px solid var(--color-indigo); */
    }

    .parent > li{
      margin-bottom: 1rem;
    }

    /* Initialy do not display */

    .sub-menu {
      display: flex;
      position: static;
      flex-direction: column;
      margin-left: 1rem;
    }

    /* Activate when hoovingring over the parent  */

    .primary-navigation .parent:hover .sub-menu {
      position: static;

      background-color: transparent;
      z-index: 100;
      color: black;
      padding: 0;
      gap: 0;
    }
  }
</style>
