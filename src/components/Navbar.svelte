<script>
  import { Link } from "svelte-routing"
  import navActive from "../stores/storeActive"
  import { onMount } from "svelte"
  import therapistId from "../stores/storeTherapistID"
  import homeId from "../stores/storeHomeId"
  import setNavActiveToLocalStorage from "../helpers/setNavActive"

  export let title = ""
  export let logo = ""
  export let list = []
  export let setGap = 2
  let toggle = false

  

  function changeActive(id) {
    $navActive = id
    setNavActiveToLocalStorage(id)
  }

  const toggleNavigation = () => (toggle = !toggle)

  onMount(() => {
    const activeFromLocalStorage = JSON.parse(localStorage.getItem("active"))
    $navActive = activeFromLocalStorage || list[0].id

    // get the id of the "/therapists"
    list.forEach((item) => {
      if (item.name === "Therapists") {
        $therapistId = item.id
      }
      if (item.name === "Home") {
        $homeId = item.id
      }
    })
  })

  const baseTitle = "Oxi Massage"

  function handleResize() {
    if (window.innerWidth < 650) {
      toggle = false
    }
  }

  window.addEventListener("resize", handleResize)

  $: if (toggle) {
    document.body.style.overflowY = "hidden"
  } else {
    document.body.style.overflowY = "auto"
  }

  let inlineStyles = `--gap:${setGap}rem;`
</script>

<header style={inlineStyles} class="primary-header flex">
  <Link class="flex" to="/">
    <div class="title-logo flex align-center gap-05">
      {#if logo}
        <img class="logo" src={logo} alt="logo" />
      {/if}
      {#if title}
        <h1 class="title">{title}</h1>
      {/if}
    </div>
  </Link>

  <div data-visible={!toggle} class="bar">
    <button
      on:click={toggleNavigation}
      class="mobile-nav-toggle"
      aria-controls="primary-navigation"
      aria-expanded={toggle}
    >
      <span>{toggle ? "x" : "≡"} </span>
    </button>
  </div>

  <nav>
    {#if list.length > 0}
      <ul data-visible={toggle} class="primary-navigation flex">
        {#each list as item, index (item.id)}
          <div class="parent">
            <li class:active={item.id === $navActive}>
              <Link
                to={item.link}
                on:click={() => {
                  changeActive(item.id)
                  document.title = `${item.name} - ${baseTitle}`
                  toggle = false
                }}
                on:keydown={(e) => {
                  if (e.key === "Enter") {
                    changeActive(item.id)
                  }
                }}
              >
                <p>
                  {item.name}
                </p>
              </Link>
            </li>
          </div>
        {/each}
      </ul>
    {/if}
  </nav>
</header>

<style>
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

    --inset: 0 0 0 0;
    --gap: 2rem;

    /* Oxana's website */
    --navbar-color: #0c71c3;
  }

  /* Sub menu */
  .parent {
    position: relative;
  }

  /* Initialy do not display */

  .sub-menu {
    display: none;
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

  /* End utility classes */

  .active {
    background-color: var(--color-cadetblue);
    border-radius: 6px;
    transition: all 350ms ease-in-out;
    color: white;
  }

  header {
    background-color: var(--navbar-color);
  }

  .title-logo {
    align-items: center;
    letter-spacing: 3px;
  }

  /* primary header */

  .logo {
    margin: 1rem;
    max-width: 150px;
    /* aspect-ratio: 1; */
  }

  .mobile-nav-toggle {
    display: none;
  }

  .primary-header {
    align-items: center;
    justify-content: center;
    color: white;
  }

  .primary-navigation {
    font-size: 18px;
    padding: 2rem;
    backdrop-filter: blur(1rem);
  }

  .primary-navigation li {
    padding: 0.1rem 0.2rem;
    transition: all 350ms ease-in-out;
  }

  .primary-navigation li:hover {
    background-color: var(--color-cadetblue);

    z-index: 100;

    opacity: 0.8;

    background-color: var(--color-cadetblue);

    color: white;
  }

  .active:hover {
    opacity: 0.9;
    transition: all 350ms ease-in-out;
  }

  li {
    border-radius: 6px;
  }

  .parent p {
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.632);
  }

  

  @media only screen and (max-width: 975px) {
    .bar {
      background-color: var(--navbar-color);
      min-height: 50px;
    }

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

      justify-content: center;

      font-size: 32px;

      letter-spacing: 3px;

      align-items: start;

      transition: all 350ms ease;

      transform: translateX(100%);
    }

    .primary-navigation[data-visible="true"] {
      transform: translateX(0);
    }

    .bar {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
    }

    .mobile-nav-toggle {
      /* background-color: var(--navbar-color); */

      position: relative;
      align-self: flex-end;
      text-align: end;
      z-index: 9999;
      width: 1rem;
      aspect-ratio: 1;

      display: block;

      font-size: 30px;
      color: white;
    }

    /* Sub menu in mobile mode */
    .parent {
      position: relative;

      /* border: 1px solid var(--color-indigo); */
    }

    .parent > li p {
      text-shadow: 1px 1px 1px black;
    }

    .parent > li {
      margin-bottom: 1rem;
    }
  }
</style>
