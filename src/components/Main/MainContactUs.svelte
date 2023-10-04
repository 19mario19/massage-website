<script>
  import fb from "../../assets/Home/ContactUs/social/fb.svg"
  import tw from "../../assets/Home/ContactUs/social/tw.svg"
  import inst from "../../assets/Home/ContactUs/social/inst.svg"
  import pin from "../../assets/Home/ContactUs/social/pin.svg"
  import { Link } from "svelte-routing"

  import navActive from "../../stores/storeActive"
  import therapistId from "../../stores/storeTherapistID"
  import setNavActiveToLocalStorage from "../../helpers/setNavActive"

  const social = [
    {
      icon: fb,
      linkTo: "facebook.com",
    },
    {
      icon: tw,
      linkTo: "twitter.com",
    },
    {
      icon: inst,
      linkTo: "instagram.com",
    },
    {
      icon: pin,
      linkTo: "pinterest.com",
    },
  ]
</script>

<div class="mainContactUs">
  <div class="top">
    <div class="details">
      <h3>CONTACT US</h3>
      <h2>Treat Yourself to a Relaxing Day With Oxi Therapist</h2>
    </div>
    <div class="button">
      <Link to="/therapists">
        <button
          on:click={() => {
            $navActive = $therapistId
            setNavActiveToLocalStorage($navActive)
            document.title = "Therapists - Oxi Massage"
          }}
        >
          BOOK APPOINTMENT
        </button>
      </Link>
    </div>
  </div>
  <div class="icons">
    {#each social as item}
      <div class="icon">
        <a href={item.linkTo}>
          <img src={item.icon} alt="" />
        </a>
      </div>
    {/each}
  </div>
</div>

<style>
  .mainContactUs {
    display: flex;
    flex-direction: column;
    background-image: url("../../assets/Home/ContactUs/bg.jpg");
    width: 100vw;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
  }

  .top {
    max-width: 1260px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    border-radius: 0 0 200px 200px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    background-image: linear-gradient(
      to right,
      hsla(0, 0%, 0%, 0.01),
      hsla(0, 6%, 85%, 0.881)
    );
  }
  .icons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    padding: 3rem;
    padding-bottom: 8.5rem;
  }

  .icon {
    background-color: var(--dark-blue);
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
  }

  .icon img {
    margin-top: 5px;
    height: 20px;
  }

  .details {
    padding: clamp(2rem, 5vw, 10rem) clamp(2rem, 10vw, 17rem);
  }
  h2,
  h3 {
    color: var(--gray-title);
  }
  h2 {
    font-family: "Prata", serif;
    letter-spacing: 2px;
    font-size: clamp(25px, 2.5vw, 55px);
    font-weight: 500;
  }

  h3 {
    font-size: 20px;
    letter-spacing: 5px;
    margin-bottom: 0.5rem;
  }

  button {
    background-color: var(--dark-blue);
    letter-spacing: 5px;
    font-size: 20px;
    color: white;
    font-weight: 500;
    height: 100%;
    width: 100%;
    padding: 2rem;
  }

  @media only screen and (max-width: 767px) {
    .top {
      flex-direction: column;
      border-radius: 0 0 40px 0;
    }
  }
  @media only screen and (max-width: 1260px) {
  }

  @media only screen and (min-width: 1261px) {
  }
</style>
