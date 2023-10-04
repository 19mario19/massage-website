<script>
  import { Link } from "svelte-routing"
  import prices from "../../data/prices"
  import navActive from "../../stores/storeActive"
  import therapistId from "../../stores/storeTherapistID"
  import setNavActiveToLocalStorage from "../../helpers/setNavActive"
</script>

<div class="packages">
  <div class="title">
    <h2>Packages</h2>
  </div>
  <div class="content">
    <div class="text">
      <h2>Oxi Massage Prices</h2>
      <div class="prices">
        <!-- price list -->
        {#each prices as price}
          <div class="price">
            <p>
              {price.duration} Mins <span class="big">— — — — — — — — — –</span>
              <span class="small"> --- </span>
              £{price.price}
            </p>
          </div>
        {/each}
      </div>
      <Link to="/therapists">
        <button
          on:click={() => {
            $navActive = $therapistId
            setNavActiveToLocalStorage($navActive)
            document.title = "Therapists - Oxi Massage"
          }}>Book Online</button
        >
      </Link>
    </div>
  </div>
</div>

<style>
  .small {
    display: none;
  }
  .packages {
    display: flex;
    flex-direction: column;
    width: 100vw;
    background-color: white;
    align-items: center;
  }

  .packages .title {
    background-color: var(--dark-blue);
    display: flex;
    justify-content: center;
    width: 100vw;
  }

  .title h2 {
    color: white;
    font-size: 50px;
    font-weight: 500;
    padding: 2rem 0;
  }

  .content {
    max-width: 1260px;
    margin: 0 auto;
    background-color: var(--lighter-blue);

    padding: 6rem 12rem;

    font-family: "Prata", serif;
    margin: 3rem;
    border-radius: 0 50px 0 150px;
    border: 5px solid white;
    outline: 7px solid var(--lighter-blue);
  }

  .text {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }

  .text h2 {
    font-size: 40px;
  }

  .text h2,
  .text p {
    color: var(--gray-title);
  }

  .price p {
    font-size: 25px;
    font-weight: 700;
  }

  .prices {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  button {
    background-color: var(--navbar-color);
    padding: 0.7rem 2.5rem;
    color: white;
    font-family: sans-serif;
    font-size: 25px;
    border-radius: 0 30px 0 30px;

    border: 2px solid transparent;
    outline: 1px solid var(--navbar-color);

    transition: all 350ms ease-in;
  }

  button:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-color: white;
    outline-color: transparent;
  }

  @media only screen and (max-width: 767px) {
    .content {
      padding: 2rem 3rem;
    }

    .text h2 {
      font-size: 30px;
    }

    .price p {
      font-size: 15px;
    }

    button {
      padding: 0.2rem 0.6rem;
      font-size: 20px;
      border-radius: 20px;
    }
  }
  @media only screen and (max-width: 500px) {
    .big {
      display: none;
    }
    .small {
      display: inline-block;
    }
  }

  @media only screen and (max-width: 391px) {
    .price p {
      font-size: 14px;
    }

    button {
      font-size: 17px;
    }

    .content {
      border-radius: 10px;
      outline-offset: 1px;
      outline-width: 2px;
      width: 90vw;
    }
  }
</style>
