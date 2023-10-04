<script>
  import { Link } from "svelte-routing"
  import massages from "../../data/massages"
  import therapistId from "../../stores/storeTherapistID"
  import navActive from "../../stores/storeActive"
  import setNavActiveToLocalStorage from "../../helpers/setNavActive"
</script>

<div class="massageList">
  <div class="content">
    <!-- Massage list -->
    {#each massages as massage}
      <div class="massage">
        <div class="img">
          <img src={massage.image} alt={massage.name} />
        </div>
        <div class="text">
          <h2>{massage.name}</h2>
          <p>{massage.description}</p>
          <div class="btn">
            <Link to="/therapists">
              <button
                on:click={() => {
                  $navActive = $therapistId
                  setNavActiveToLocalStorage($navActive)
                  document.title = "Therapists - Oxi Massage"
                }}>BOOK NOW</button
              >
            </Link>
          </div>
          <div class="mobile">
            <hr />
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .mobile {
    display: none;
  }

  .massageList {
    display: flex;
    width: 100vw;
    padding: 5rem;
  }

  .content {
    max-width: 1260px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
  }

  .massage {
    display: flex;
    align-items: center;
    gap: 5rem;
    padding: 2rem 4rem;
  }

  h2 {
    font-size: 50px;
    font-weight: 500;
    color: var(--gray-title);
  }

  .content .massage:nth-child(2n) {
    flex-direction: row-reverse;
  }

  .text {
    display: flex;
    flex-direction: column;
  }

  .btn {
    align-self: flex-end;
    justify-self: flex-end;
    background-color: var(--navbar-color);
    padding: 0.7rem 2.5rem;
    border-radius: 20px;
    margin-top: 2rem;
    transition: all 350ms ease-in;
    border: 3px solid transparent;
  }

  .btn:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-color: white;
    border-radius: 100px;
  }

  .btn button {
    color: white;
    letter-spacing: 2px;
    font-weight: 700;
  }

  /* border radius */

  .massage img {
    outline: 3px solid white;
    border: 7px solid var(--bg-color);
  }
  .massage:nth-child(2n) img {
    border-radius: 100px 0 100px 0;
  }
  .massage:nth-child(2n + 1) img {
    border-radius: 0 100px 0 100px;
  }

  .massage:first-child img {
    border-radius: 100px 100px 0 100px;
  }
  .massage:last-child img {
    border-radius: 100px 0 100px 100px;
  }

  /* border buttons */

  .massage:nth-child(2n) .btn {
    border-radius: 100px 100px 0 100px;
    align-self: flex-start;
  }

  .massage:nth-child(2n + 1) .btn {
    border-radius: 100px 100px 100px 0;
    align-self: flex-end;
  }

  .massage:first-child .btn {
    border-radius: 100px 100px 100px 0;
  }

  .massage:last-child .btn {
    border-radius: 0 100px 100px 100px;
  }
  /* images */

  img {
    width: 370px;
    transition: all 350ms ease-in;
  }

  img:hover {
    border-color: rgba(255, 0, 0, 0.395);
  }

  /* media  */

  @media only screen and (max-width: 909px) {
    .massageList,
    .massage,
    .content,
    .text {
      padding: 0;
      margin: 0;
    }

    .massage:first-child img,
    .massage:last-child img,
    .massage:nth-child(2n) img,
    .massage:nth-child(2n + 1) img {
      width: 90vw;
      border-width: 3px;
      outline-offset: 1px;
    }

    .massage {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      padding: 2rem 1.2rem;

      text-align: justify;

      gap: 0.5rem;
    }

    .text {
      padding: 0 0.4rem;
    }

    .text h2 {
      font-size: 30px;
      margin-bottom: 0.5rem;
    }

    .massage:first-child .btn,
    .massage:last-child .btn,
    .massage:nth-child(2n) .btn,
    .massage:nth-child(2n + 1) .btn {
      margin: 1rem auto;
      border-radius: 100px;
    }

    .mobile {
      display: flex;
      width: 80vw;
      margin: 0 auto;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .mobile hr {
      background-color: var(--gray-title);
      width: 90px;
      height: 1px;
      border: 0;
    }

    .massage:last-child .mobile hr {
      display: none;
    }
  }
</style>
