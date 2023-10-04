<script>
  import { Link } from "svelte-routing"
  import logo from "../assets/logo.png"
  import navActive from "../stores/storeActive"
  import therapistId from "../stores/storeTherapistID"
  import homeId from "../stores/storeHomeId"
  import setNavActiveToLocalStorage from "../helpers/setNavActive"

 
</script>

<div class="bookOnline">
  <div class="content">
    <div class="left">
      <Link
        on:click={() => {
          $navActive = $homeId
          setNavActiveToLocalStorage($navActive)
           document.title = "Home - Oxi Massage"
        }}
        to="/"
      >
        <img src={logo} alt="" />
      </Link>
    </div>
    <div class="right">
      <Link to="/therapists">
        <button on:click={() => {
          $navActive = $therapistId
          setNavActiveToLocalStorage($navActive)
           document.title = "Therapists - Oxi Massage"
         
        }
        }>Book Online</button
        >
      </Link>
    </div>
  </div>
</div>

<style>
  .bookOnline {
    min-height: 120px;

    background-color: var(--bg-color);
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1260px;
    padding: 1rem 2rem;
    margin: 0 auto;
  }

  button {
    background-color: var(--navbar-color);
    color: white;
    padding: 0.5rem 0.8rem;
    border-radius: 10px;
    outline: 2px solid white;
    letter-spacing: 2px;
    font-size: 20px;
    font-weight: 500;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  @media only screen and (max-width: 767px) {
    .bookOnline {
      padding: 0.2rem 2rem;
    }
    .content {
      padding: 0.2rem 0.8rem;
      gap: 2rem;
    }
    button {
      font-size: 15px;
    }
  }

  /* Up to 1260px */
  @media only screen and (max-width: 1260px) {
    /* Your styles for screens between 768px and 1260px here */
  }

  /* Higher than 1260px */
  @media only screen and (min-width: 1261px) {
    /* Your styles for screens wider than 1260px here */
  }
</style>
