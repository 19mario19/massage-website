<script>
  import relax from "../../assets/Home/USP/relax.png"
  import rebalance from "../../assets/Home/USP/rebalance.png"
  import rejuvenate from "../../assets/Home/USP/rejuvenate.png"
  import retreat from "../../assets/Home/USP/retreat.png"

  const list = [
    {
      name: "Relax",
      image: relax,
    },
    {
      name: "Rebalance",
      image: rebalance,
    },
    {
      name: "Rejuvenate",
      image: rejuvenate,
    },
    {
      name: "Retreat",
      image: retreat,
    },
  ]
</script>

<div class="mainUSP">
  <div class="content">
    {#each list as item}
      <!-- list of cards -->
      <div class="card">
        <div class="image">
          <img src={item.image} alt="signs" />
          <p>{item.name}</p>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .mainUSP {
    background-color: white;
  }

  .content {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 2rem;

    max-width: 1260px;
    margin: 0 auto;
  }

  .mainUSP p {
    font-family: "Prata", serif;
  }

  img {
    border-radius: 50%;
  }

  @media only screen and (max-width: 767px) {
    .mainUSP {
      padding: 2rem;
      gap: 2rem;
      justify-content: center;
    }
    .card {
      width: 35%;
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
