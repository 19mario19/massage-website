<script>
  import massageTypes from "../../data/massageTypes"
</script>

<div class="mainTop">
  <div class="container">
    <div class="content">
      <div class="top">
        <p>RELAX, REJUVINATE, REBALANCE</p>
        <h1>Oxi Massage</h1>
      </div>
      <div class="bottom">
        <p>The Best Mobile Massage Service in London</p>
      </div>
    </div>
  </div>
  <div class="massages">
    <div class="content-bottom">
      <!-- Types of massages -->
      <ul>
        {#each massageTypes as massage}
          <div class="massage">
            <li>
              <p>{massage.name.toUpperCase()} <span>MASSAGE</span></p>
            </li>
          </div>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style>
  .mainTop {
    display: flex;
    flex-direction: column;
    color: white;
    background-color: var(--light-blue);

    
    width: 100vw;
  }
  
  h1,
  .bottom p {
    font-family: "Prata", serif;
  }
  
  .top {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .top p {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 5px;
    line-height: 1.6em;
  }
  .top h1 {
    font-size: clamp(50px, 8vw, 140px);
    line-height: 1.4em;
    letter-spacing: 10px;
  }
  
  .bottom p {
    font-size: 24px;
    font-weight: 800;

    letter-spacing: 2px;
    text-shadow: 0em 0em 3em rgba(22, 29, 67, 0.24);
  }
  
  .content-bottom {
    max-width: 1260px;
    margin: 0 auto;
  }
  
  .container {
    background-image: url("../../assets/Home/main-picture.jpg");
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    gap: 1rem;
    
    width: 100%;
    
    padding: 5rem;

    border-radius: 0 0 0 200px;
  }

  .content {
    display: flex;
    flex-direction: column;
  }
  .content .bottom {
    align-self: flex-end;
  }

  .massages {
    background-color: var(--light-blue);
    font-weight: 700;

    font-size: clamp(11px, 3.5vw, 15px);
    letter-spacing: 5px;

    text-align: center;
  }

  .massages ul {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 3rem;
    padding: 2rem;
  }

  @media only screen and (max-width: 767px) {
    .container {
      padding: 2rem;
      border-radius: 0;
    }

    .massages ul {
      flex-direction: column;
    }

    .top p {
      font-size: 11px;
    }
    .top h1 {
      font-size: clamp(50px, 8vw, 140px);
    }

    .bottom p {
      font-size: 13px;
    }
  }

  @media only screen and (max-width: 1260px) {
  }

  @media only screen and (min-width: 1261px) {
    .container .bottom p {
      font-size: 28px;
    }

    .container h1 {
      font-size: 160px;
      text-shadow: 5px 2px 2px black;
    }
    .container h1::first-letter {
      color: rgba(169, 59, 59, 0.834);
      font-size: 200px;
    }

    .container {
      border-radius: 0;
      animation: border-animation 550ms 250ms forwards;
    }

    @keyframes border-animation {
      from {
        border-radius: 0;
      }
      to {
        border-radius: 0 0 0 200px;
      }
    }
    .massages {
      padding: 2rem 10rem;
    }
  }
</style>
