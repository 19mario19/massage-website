<script>
  import { onMount } from "svelte"
  import therapistsList from "../data/therapistsList"
  import toUpperFirst from "../helpers/toUpperFirst"
  import massages from "../data/massages"
  import prices from "../data/prices"
  import paymentType from "../data/payment"

  export let name
  const therapistName = name
  const therapist = therapistsList.find(
    (therapist) => therapist.name.toLowerCase() === therapistName,
  )

  let massagesNames = massages.map((massage) => massage.name)
  let paymentNames = paymentType.map((payment) => payment.name)
  let pricesDurationString = prices.map((el) => {
    return `${el.duration} Min (£${el.price})`
  })

  let formData = {
    name: "",
    email: "",
    telephone: "",
    address: "",
    postcode: "",
    services: [...massagesNames],
    selectedService: "",
    date: "",
    time: "",
    duration: [...pricesDurationString],
    prices: [...prices],
    selectedDuration: "",
    travelFee: 10,
    total: 0,
    payment: [...paymentNames],
    selectedPayment: "",
    setDefaults() {
      this.selectedService = this.services[0]
      this.selectedDuration = this.duration[0]
      this.selectedPayment = this.payment[0]
    },
  }
  let error = { ...formData }

  function calculateTotal() {
    const selectedIndex = formData.duration.findIndex(
      (el) => el === formData.selectedDuration,
    )

    if (selectedIndex !== -1) {
      const selectedPrice = formData.prices[selectedIndex].price

      formData.total = selectedPrice + formData.travelFee
    }
  }

  let valid = false
  let done = false

  function handleSubmit() {
    calculateTotal()
    let {
      name,
      email,
      telephone,
      address,
      postcode,
      selectedService,
      selectedDuration,
      selectedPayment,
      date,
      time,
      total,
    } = formData

    valid = true
    done = false

    let toCheckFields = {
      name,
      email,
      telephone,
      address,
      postcode,
      date,
      time,
    }

    for (let field in toCheckFields) {
      if (toCheckFields[field] === "") {
        console.log(field, "is empty")
        error[field] = true
        valid = false
      } else {
        error[field] = false
        console.log(field, "is filled")
      }
    }

    if (valid) {
      console.log("All good! Continue...")
      done = true
    } else {
      console.log("Found empty")
    }

    console.log(`
    Guest Information:
    - Therapist: ${toUpperFirst(therapistName)}
    - Name: ${name}
    - Email: ${email}
    - Telephone: ${telephone}
    - Address: ${address}
    - Postcode: ${postcode}
    - Selected Service: ${selectedService}
    - Selected Duration: ${selectedDuration}
    - Selected Payment: ${selectedPayment}
    - Date: ${date}
    - Time: ${time}
    
    Booking Details:
    - Travel fee: £${formData.travelFee} (only central London)
    - Total amount: £${total}
  `)
  }

  onMount(() => {
    formData.setDefaults()
    formData.selectedService = formData.services[0]

    document.title = `${toUpperFirst(therapistName)} ${
      therapist.position
    } - Oxi Massage`
  })

  $: if (formData.selectedService) {
    calculateTotal()
  }

//   $: console.log("errors",error)

  //   console.log(formData)
</script>

<div class="product">
  <div class="content">
    <div class="left">
      <div class="img">
        <img src={therapist.productImage} alt={therapist.name} />
      </div>
    </div>
    <div class="right">
      <div class="top">
        <h2>{therapist.name} {therapist.position}</h2>
        <div class="description">
          <p>{therapist.description}</p>
        </div>
      </div>

      <div class="form">
        <form on:submit|preventDefault={handleSubmit}>
          <div class="inputs">
            <!-- Name -->
            <input
              placeholder="Name"
              type="text"
              id="name"
              bind:value={formData.name}
            />

            <!-- Email -->
            <input
              placeholder="Email"
              type="email"
              id="email"
              bind:value={formData.email}
            />

            <!-- Telephone -->
            <input
              placeholder="Telephone"
              type="tel"
              id="telephone"
              bind:value={formData.telephone}
            />

            <!-- Address -->
            <input
              placeholder="Address"
              type="text"
              id="address"
              bind:value={formData.address}
            />
            <!-- Postcode -->
            <input
              placeholder="Postcode"
              type="text"
              id="postcode"
              bind:value={formData.postcode}
            />

            <!-- Select Service -->
            <select id="services" bind:value={formData.selectedService}>
              {#each formData.services as service}
                <option value={service}>{service}</option>
              {/each}
            </select>

            <!-- Select Duration -->
            <select id="duration" bind:value={formData.selectedDuration}>
              {#each formData.duration as duration}
                <option value={duration}>{duration}</option>
              {/each}
            </select>

            <!-- Select Payment -->
            <select id="payment" bind:value={formData.selectedPayment}>
              {#each formData.payment as payment}
                <option value={payment}>{payment}</option>
              {/each}
            </select>
            <div class="time">
              <!-- Select Date -->
              <input
                placeholder="Select Date"
                type="date"
                id="date"
                bind:value={formData.date}
              />

              <!-- Select Time -->
              <input
                placeholder="Select Time"
                type="time"
                id="time"
                bind:value={formData.time}
              />
            </div>
          </div>
          <hr />
          <div class="total">
            <p>
              Travel fee : <strong>£{formData.travelFee}</strong> - only central
              London
            </p>
            <h3>Total amount: £{formData.total}</h3>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  </div>
</div>

<style>
  .time {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  hr {
    background-color: black;
    width: 90%;
    height: 1.5px;
  }

  .product {
    display: flex;
    width: 100vw;
    background-color: white;
  }

  .content {
    max-width: 1260px;
    margin: 0 auto;

    display: flex;
    gap: 2rem;

    padding: 2rem 5rem;
  }

  .content h2 {
    color: var(--gray-title);
    margin-bottom: 1.5rem;
  }

  .content p {
    color: black;
    letter-spacing: 1.2px;
    font-size: 17px;
  }

  .img {
    overflow: hidden;
    width: 400px;
    max-height: 580px;

    border-radius: 80px 0;
    border: 2px solid white;
    outline: 3px solid rgba(255, 0, 38, 0.087);

    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  .img img {
    width: 450px;
    transition: all 250ms ease-in-out;
    cursor: pointer;
  }

  .img img:hover {
    transform: scale(1.2) translateY(30px);
  }

  .form {
    display: flex;
    flex-direction: column;
  }

  .form .inputs {
    display: flex;
    flex-direction: column;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .right {
    padding: 0 2rem;
  }

  .right .top {
    margin-bottom: 2rem;
  }

  input,
  select {
    border: 2px solid;
  }
  .inputs input,
  .inputs select {
    font-size: 14px;
    padding: 0.8rem 2rem;
    background-color: var(--input-color);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  .inputs {
    display: flex;
    gap: 1.2rem;
  }

  .inputs > input:first-child {
    border-radius: 20px 20px 20px 0;
  }

  .inputs input {
    border-radius: 20px;
  }

  input {
    border: 2px solid black;
    outline: 2px solid transparent;

    transition: all 150ms ease-in;
  }

  input:hover {
    border-color: var(--navbar-color);
    background-color: #dcd4d448;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  input:focus {
    background-color: #dcd4d448;
    border-color: var(--form-btn);
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

  select {
    border-radius: 20px;
  }

  .total {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media only screen and (max-width: 1090px) {
    .content {
      flex-direction: column;
      align-items: center;
    }

    .left {
    }
  }
  @media only screen and (max-width: 729px) {
    .content {
      padding: 1rem;
    }

    .right {
      padding: 0;
    }
    .img {
      margin: 0 auto;
      width: 90vw;

      border-radius: 10px;

      outline: none;
    }
  }
</style>
