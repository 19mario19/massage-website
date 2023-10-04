<script>
  import defaultImage from "../assets/Therapists/Main.jpg"

  export let bgImage = defaultImage
  export let subtitle = "OXI MASSAGE"
  export let title = "Title"
  export let bgColor = "transparent"
  export let containerBg = "#e2ab9c"

  let inlineStyle = `background-image: url("${bgImage}"); 
  --bg-color: ${bgColor};
  `

  let containerStyle = `background-color: ${containerBg};`
</script>

<div style={containerStyle} class="contentTop">
  <div style={inlineStyle} class="container">
    <div class="content">
      <div class="details">
        <h3>{subtitle}</h3>
        <h2>{title}</h2>
      </div>
    </div>
  </div>
</div>

<style>
  .contentTop {
    display: flex;
    width: 100vw;
    background-color: var(--container-bg);
  }
  .container {
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;

    gap: 1rem;

    width: 100%;

    height: 44vh;

    border-radius: 0 0 0 200px;
    display: flex;
    flex-direction: column;
    justify-content: end;

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
      rgba(216, 220, 218, 0.269) 70%,
      rgba(255, 255, 255, 0) 100%
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
    font-size: 120px;
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

  @media only screen and (max-width: 1200px) {
    h2 {
      font-size: 80px;
    }
  }
  @media only screen and (max-width: 767px) {
    h2 {
      font-size: 35px;
    }

    h3 {
      font-size: 15px;
    }

    .container {
      border-radius: 0;
      height: 22vh;
    }

    .content {
      border-radius: 0 200px 0 0;
      height: 20vh;
    }
  }

  @media only screen and (max-width: 380px) {
    h2 {
      font-size: 32px;
    }

    h3 {
      font-size: smaller;
    }

    .container {
      height: 20vh;
    }

    .content {
      height: 15vh;
    }
  }
</style>
