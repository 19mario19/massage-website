<script>
  import { quintOut } from "svelte/easing"
  import { fade, slide } from "svelte/transition"

  let reset = {
    name: "",
    number: "",
    email: "",
    message: "",
  }

  let error = { ...reset }
  let inputs = { ...reset }

  let done = false

  function handleSubmit() {
    // validation
    let valid = false
    done = false

    for (let input in inputs) {
      if (inputs[input].length < 5) {
        valid = false
        error[input] = `${input[0].toUpperCase()}${input.slice(
          1,
        )} must have at least five characters!`
      } else {
        error[input] = ""
        valid = true
      }
    }

    let notEmpty = !Object.values(error).find((error) => error !== "")

    // reset input after submission
    if (valid && notEmpty) {
      inputs = { ...reset }
      done = true
    }
  }

  $: if (done) {
    setTimeout(() => {
      done = false
    }, 2500)
  }
</script>

<div class="applyForm">
  <div class="content">
    <h2 class="title">Get In Touch</h2>
    {#if done}
      <div transition:slide={{ axis: "y", easing: quintOut }} class="done">
        <h5>Thank you for getting in touch with us!</h5>
      </div>
    {:else}
      <form transition:slide={{ axis: "y", easing: quintOut }} on:submit|preventDefault={handleSubmit}>
        <div class="inputs">
          <input type="text" placeholder="Name" bind:value={inputs.name} />
          {#if error.name}
            <p transition:fade class="error">{error.name}</p>
          {/if}
          <input
            type="number"
            placeholder="Contact No."
            bind:value={inputs.number}
          />
          {#if error.number}
            <p transition:fade class="error">{error.number}</p>
          {/if}
          <input
            type="email"
            placeholder="Email Address"
            bind:value={inputs.email}
          />
          {#if error.email}
            <p transition:fade class="error">{error.email}</p>
          {/if}
          <textarea placeholder="Message" bind:value={inputs.message} />
          {#if error.message}
            <p transition:fade class="error">{error.message}</p>
          {/if}
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    {/if}
  </div>
</div>

<style>
  :root {
    --form-btn: #ff7a6b;
    --input-color: #f9fafc;
  }

  .done {
    margin: 0 auto;
    padding: 2rem;

    border-radius: 20px;
    opacity: 0.9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 25px;
    background-color: var(--primary);
  }

  .error {
    color: white;
    background-color: var(--error);
    width: fit-content;
    padding: 0.2rem 0.5rem;
    border-radius: 8px;
    opacity: 0.5;
  }

  h2 {
    color: var(--gray-title);
    font-size: 50px;
    font-weight: 500;
    padding: 2rem 0;
  }

  .applyForm {
    display: flex;
    flex-direction: column;
    width: 100vw;
    background-color: white;
    padding: 2rem 5rem;
  }

  .content {
    max-width: 1250px;
    margin: 0 auto;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .inputs input,
  .inputs textarea {
    width: 60vw;
    font-size: 14px;
    padding: 1.2rem 2rem;
    background-color: var(--input-color);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  textarea {
    resize: none;
    min-height: 150px;
    border-radius: 20px 0 20px 20px;
  }

  .inputs input:first-child {
    border-radius: 20px 20px 20px 0;
  }

  .inputs input {
    border-radius: 10px;
  }

  textarea,
  input {
    border: 2px solid black;
    outline: 2px solid transparent;

    transition: all 150ms ease-in;
  }

  textarea:hover,
  input:hover {
    border-color: var(--navbar-color);
    background-color: #dcd4d448;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  textarea:focus,
  input:focus {
    background-color: #dcd4d448;
    border-color: var(--form-btn);
  }

  h2::first-letter {
    color: var(--form-btn);
    font-size: 60px;
  }

  button {
    background-color: var(--form-btn);
    color: white;
    font-weight: 500;
    padding: 1.2rem 1.5rem;
    letter-spacing: 2px;
    font-size: 12px;
    outline: 2px solid transparent;
    border: 2px solid transparent;
    transition: all 350ms ease-in;

    border-radius: 0 10px 10px 10px;

    align-self: flex-end;
  }

  button:hover {
    outline-color: var(--form-btn);
    border-color: white;
  }

  button:active {
    transform: translateY(4px);
    opacity: 0.7;
  }

  @media only screen and (min-width: 909px) {
    .inputs input,
    .inputs textarea {
      width: 40vw;
      max-width: 1260px;
    }
  }
</style>
