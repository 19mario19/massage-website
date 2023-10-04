<script>
</script>

<div class="therapistsTop">
  <div class="container">
    <div class="content">
      <div class="details">
        <h3>OXI MASSAGE</h3>
        <h2>Professional Therapist</h2>
      </div>
    </div>
  </div>
</div>

<style>
  .therapistsTop {
    display: flex;
    width: 100vw;
  }
  .container {
    background-image: url("../../assets/Therapists/Main.jpg");
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;

    gap: 1rem;

    width: 100%;

    border-radius: 0 0 0 200px;

    overflow: hidden;
  }

  .content {
    display: flex;
    flex-direction: column;
    color: var(--gray-title);
    align-items: center;
    justify-content: center;

    height: 35vh;

    color: white;

    background-image: linear-gradient(
      90deg,
      rgba(123, 157, 137, 0.4) 70%,
      rgba(255, 255, 255, 0.88) 100%
    );
    border-radius: 0 200px 0 200px;
    animation: top 680ms 250ms forwards;

  }

  h2,
  h3 {
    opacity: 0;
  }

  h2 {
    font-family: "Prata", serif;
    font-size: 90px;
  }
  h2,
  h3 {
    animation: opacity 680ms 250ms forwards;
  }

  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes top {
    from {
      transform: translateX(-100px);
    }
    to {
      transform: translateX(-60px);
    }
  }


  
  
  @media only screen and (min-width: 1261px) {
  }
  @media only screen and (max-width: 1200px) {
    h2 {
      font-size: 50px;
    }
  }
  @media only screen and (max-width: 767px) {
    h2 {
      font-size: 25px;
    }

    h3 {
      font-size: 15px;
    }

    .container {
      border-radius: 0;
    }

    .content {
      border-radius: 0 200px 0 0;
      height: 20vh;
    }

     @keyframes top {
    from {
      transform: translateX(-100px);
    }
    to {
      transform: translateX(-40px);
    }
  }

    
  }
  
  @media only screen and (max-width: 380px) {
    h2 {
      font-size:19px;
     }

     h3 {
      font-size: smaller;
     }

      .content {
      height: 15vh;
      }
    }
</style>
