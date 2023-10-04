import { writable } from "svelte/store"

const navActiveLocalStorage = JSON.parse(localStorage.getItem("active"))

const navActive = writable(navActiveLocalStorage)

export default navActive
