<script>
  import stars from "../../assets/Home/Testimonials/stars.png"
</script>

<div class="mainTestimonials">
  <div class="content">
    <h3>TESTIMONIALS</h3>
    <h2>What They Say</h2>
    <div class="comment">
      <div class="rating"><img src={stars} alt="" /></div>
      <div class="description">
        <p>
          “I have used OXI Massage services a few times. The staff is always
          absolutely professional while still being quite personable and
          friendly! The actual messages I’ve received have been absolutely
          amazing, and the staff even gives me advice on how to stay healthy.
          TEN OUT OF TEN WOULD RECOMMEND TO ANYONE”
        </p>
        <p class="author">Jack Smith</p>
      </div>
    </div>
  </div>
</div>

<style>
  :root {
    --color-brown: #684e48;
  }

  .mainTestimonials {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }

  h2,
  h3 {
    color: var(--gray-title);
  }
  h2 {
    font-family: "Prata", serif;
    margin-bottom: 2rem;
    letter-spacing: 2px;
    font-size: 35px;
    font-weight: 500;
  }

  h3 {
    font-size: 16px;
    letter-spacing: 5px;
    margin-bottom: 0.5rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 2rem;

    max-width: 1260px;
    margin: 0 auto;
  }
  .author {
    margin-top: 2rem;
  }

  .comment {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .comment .description {
    padding: 0 2rem;
  }

  .comment .description p {
    font-size: 18px;
    word-wrap: break-word;
    line-height: 2.6rem;
    color: var(--color-brown);
  }
  /* Up to 767px */
  @media only screen and (max-width: 767px) {
    /* Your mobile-specific CSS styles here */
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
