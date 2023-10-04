<script>
  import { Link } from "svelte-routing"
  import therapistsList from "../../data/therapistsList"
  import navActive from "../../stores/storeActive"
  import setNavActiveToLocalStorage from "../../helpers/setNavActive"

  

  // Because it is not within the navbar
  function resetNavActive() {
    // any number that is not the index of the therapists
    $navActive = 100
    setNavActiveToLocalStorage($navActive)
  }
</script>

<div class="therapistsList">
  <!-- list of therapists -->
  <div class="content">
    {#each therapistsList as therapist}
      <Link
        on:click={resetNavActive}
        to={`product/${therapist.name.toLowerCase()}`}
      >
        <div class="card">
          <img src={therapist.picture} alt="profile" />
          <h5>{therapist.name}</h5>
          <p>{therapist.position}</p>
        </div>
      </Link>
    {/each}
  </div>
</div>

<style>
  .therapistsList {
    display: flex;
    width: 100vw;
    justify-content: center;
    margin: 0 auto;
  }

  .content {
    max-width: 1260px;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    align-items: center;
    justify-content: center;

    padding: 2rem;
  }

  .card {
    cursor: pointer;

    text-align: center;
    padding: 2rem;

    transition: all 350ms ease-in-out;
  }

  img {
    transition: all 350ms ease-in-out;
  }

  .card:hover {
    transform: scale(1.1);
  }

  .card:hover img {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }

  .card h5 {
    font-family: "Prata", serif;
    color: var(--gray-title);
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  img {
    max-height: 270px;
    border-radius: 120px;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 767px) {
    .card {
      padding: 0.1rem;
    }
    img {
      max-height: 150px;
      margin-bottom: 0.5rem;
    }
  }

  @media only screen and (max-width: 1260px) {
  }

  @media only screen and (min-width: 1261px) {
  }
</style>
