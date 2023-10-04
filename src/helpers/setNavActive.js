function setNavActiveToLocalStorage(item) {
  localStorage.setItem("active", JSON.stringify(item))
}
export default setNavActiveToLocalStorage
