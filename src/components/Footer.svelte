<script>
  import timeTable from "../data/timeTable"
  import { Link } from "svelte-routing"
  import navActive from "../stores/storeActive"
  import therapistId from "../stores/storeTherapistID"
  import flowers from "../assets/flowers.png"
  import setNavActiveToLocalStorage from "../helpers/setNavActive"
</script>

<div class="footer">
  <div class="content">
    <div class="left">
      <h2>Working hours</h2>
      <!-- timetable -->
      {#each timeTable as item, index (index)}
        <div class="day">
          <p>
            {item.day.toLocaleUpperCase()}: {item.start}<span>AM</span> - {item.end}<span
              >PM</span
            >
          </p>
        </div>
      {/each}
    </div>
    <div class="right">
      <div class="bottom">
        <h2>The Website is for Sale</h2>
        <h3>PLEASE CONTACT</h3>
        <h3>INFO@OXIMASSAGE.CO.UK</h3>
        <h3>ADMIN</h3>
      </div>

      <Link to="/therapists">
        <button
          on:click={() => {
            $navActive = $therapistId
            setNavActiveToLocalStorage($navActive)
          }}>BOOK APPOINTMENT</button
        >
      </Link>
    </div>
  </div>
  <div class="flower">
    <img src={flowers} alt="" />
  </div>
</div>

<style>
  .content {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    max-width: 1260px;
    padding: 5rem;
    margin: 0 auto;
  }

  h2 {
    font-family: "Prata", serif;
    color: var(--gray-title);
    padding-bottom: 30px;

    font-size: 40px;
    font-weight: 500;
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 15px;
    word-break: break-all;
  }
  span {
    font-weight: bold;
  }
  .day {
    padding-bottom: 15px;
  }
  .right {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-between;
  }

  .bottom {
    margin-bottom: 45px;
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .footer {
    position: relative;
  }

  .flower {
    position: absolute;
    top: -180px;
    right: -250px;
    transform: scale(0.4);
    opacity: 0.8;
  }

  button {
    background-color: var(--navbar-color);
    color: white;
    padding: 1rem 2rem;
    letter-spacing: 5px;
    font-size: 18px;
    font-weight: 700;
  }
  @media only screen and (max-width: 767px) {
    .flower {
      display: none;
    }

    .footer {
      padding: 1.2rem;
    }
    .content {
      flex-direction: column;
      gap: 2rem;
      padding: 2rem;
    }

    .right {
      align-items: baseline;
    }

    h2 {
      font-size: 30px;
    }

    h3 {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 380px) {
    .footer {
      padding: 0;
    }
    .content {
      padding: 1rem 2rem;
    }
  }
</style>
