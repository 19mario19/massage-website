<script>
  import mainPicture from "../../assets/Home/description-main-pic.jpg"
  import pictureOne from "../../assets/Home/description-pic-one.jpeg"
  import pictureTwo from "../../assets/Home/description-pic-two-resized.jpg"
</script>

<div class="mainDescription">
  <div class="mobile">
    <div class="left">
      <div class="description">
        <h4>LUXURY, QUALITY & COMFORT</h4>
        <h2>Why Choose Oxi?</h2>
        <p>
          We feel that you deserve the greatest hotel and home massage services
          in London, which is why we founded Oxi Massage. Each of our certified
          therapists has had extensive training in a variety of methods and
          approaches, and one of them might be with you in as little as an hour.
          We are confident that you will enjoy your therapy.
        </p>
      </div>
      <div class="mainPicture">
        <img src={mainPicture} alt="woman massages man" />
      </div>

      <div class="pictureOne">
        <img src={pictureOne} alt="woman massages man" />
      </div>
      <div class="massages">
        <h3>Relaxation Massage</h3>
        <h3>Deep Tissue Massage</h3>
      </div>
      <div class="pictureTwo">
        <img src={pictureTwo} alt="woman massages man" />
      </div>
    </div>
    <div class="right">
      <div class="swedish">
        <h3>Swedish Massage</h3>
      </div>
    </div>
  </div>
  <div class="desktop">
    <div class="left">
      <div class="description">
        <h4>LUXURY, QUALITY & COMFORT</h4>
        <h2>Why Choose Oxi?</h2>
        <p>
          We feel that you deserve the greatest hotel and home massage services
          in London, which is why we founded Oxi Massage. Each of our certified
          therapists has had extensive training in a variety of methods and
          approaches, and one of them might be with you in as little as an hour.
          We are confident that you will enjoy your therapy.
        </p>
      </div>
      <div class="bottom">
        <div class="left">
          <div class="pictureOne">
            <img src={pictureOne} alt="woman massages man" />
          </div>
          <div class="massages">
            <h3>Relaxation Massage</h3>
          </div>

          <div class="massages">
            <h3>Deep Tissue Massage</h3>
          </div>
          <div class="pictureTwo">
            <img src={pictureTwo} alt="woman massages man" />
          </div>
        </div>
        <div class="right">
          <div class="swedish">
            <h3>Swedish Massage</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="mainPicture">
        <img src={mainPicture} alt="woman massages man" />
      </div>
    </div>
  </div>
</div>

<style>
  .mobile {
    display: none;
  }
  .mainDescription {
    display: flex;
  }

  h4 {
    font-size: clamp(10px, 2.15vw, 20px);
    letter-spacing: 2.5px;
  }

  h2,
  h4 {
    color: var(--gray-title);
    line-height: 1.4em;
    margin-bottom: 1rem;
  }
  p,
  h2,
  h4,
  .massages h3,
  .swedish h3 {
    font-weight: 500;
    word-wrap: break-word;
  }
  h2,
  .massages {
    font-family: "Prata", serif;
    color: var(--gray-title);
  }

  .massages h2 {
    font-size: clamp(15px, 2vw, 18px);
    padding: 1rem;
    word-break: break-all;
  }

  p {
    line-height: 1.5rem;
    font-size: clamp(8px, 3.5vw, 15px);
  }
  .mainDescription {
    flex-direction: row;
  }

  .desktop {
    display: flex;

    max-width: 1260px;
    margin: 0 auto;
  }

  .desktop .left {
    flex: 1.4;
  }
  .desktop > .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .desktop .description {
    padding: 2rem 0;
    font-size: 35px;
  }
  .desktop .description p {
    letter-spacing: 2px;
  }
  .desktop .description h4 {
    font-size: 17px;
    font-weight: 700;
  }

  .desktop .bottom {
    display: grid;
    grid-template-columns: 4fr 1fr;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .desktop .bottom .right {
    
  }

  .desktop .bottom .left {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .desktop .bottom .left > * {
  }

  .desktop .pictureOne {
  }
  .desktop .massages {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .desktop .pictureTwo {
  }
  .desktop .right {
    flex: 1;
  }

  .desktop .right img {
    border-radius: 0 0 150px 0;
  }

  .desktop .bottom .right .swedish {
    background-color: var(--dark-blue);
    color: white;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: clamp(12px, 1.5vw, 20px);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 2rem;
  }
  .desktop .mainPicture {
  }

  img {
    width: 100%;
  }

  @media only screen and (max-width: 767px) {
    .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }
    .mainDescription {
      flex-direction: column;
    }

    .description,
    .massages,
    .swedish {
      padding: 2rem;
    }

    .massages,
    .swedish {
      text-align: center;
    }

    .mainDescription .left .description,
    .massages {
      display: flex;
      flex-direction: column;
    }

    .massages > * {
      padding: 2rem;
    }

    .swedish {
      background-color: var(--dark-blue);
      color: white;
      text-transform: uppercase;
      letter-spacing: 5px;
      font-size: clamp(12px, 1.5vw, 30px);
    }
    .swedish h3 {
      font-weight: 700;
    }

    img {
      max-width: 100%;
      margin-bottom: -5px;
    }
    .pictureTwo img {
      margin-bottom: -10px;
    }
  }


/* Up to 1260px */
@media only screen and (max-width: 1260px) {
  .desktop {
    padding: 2rem ;
  }
}

/* Higher than 1260px */
@media only screen and (min-width: 1261px) {
  /* Your styles for screens wider than 1260px here */
}

</style>
