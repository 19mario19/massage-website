// @ts-ignore
import Home from "../pages/home/Home.svelte"
// @ts-ignore
import Support from "../pages/contact/support/Support.svelte"
// @ts-ignore
import Contact from "../pages/contact/Contact.svelte"
// @ts-ignore
import About from "../pages/about/About.svelte"
// @ts-ignore
import Mission from "../pages/about/mission/Mission.svelte"
// @ts-ignore
import Sales from "../pages/contact/sales/Sales.svelte"
// @ts-ignore
import Services from "../pages/home/services/Services.svelte"
// @ts-ignore
import Portfolio from "../pages/home/portfolio/Portfolio.svelte"
import addId from "../helpers/addId"

const navigationList = [
  {
    name: "Home",
    link: "/",
    component: Home,
    children: [
      { name: "Services", component: Services, link: "/services" },
      { name: "Portfolio", component: Portfolio, link: "/portfolio" },
    ],
  },
  {
    name: "About",
    link: "/about",
    component: About,
    children: [{ name: "Mission", component: Mission, link: "/about/mission" }],
  },
  {
    name: "Contact",
    link: "/contact",
    component: Contact,
    children: [
      { name: "Support", component: Support, link: "/contact/support" },
      { name: "Sales", component: Sales, link: "/contact/sales" },
    ],
  },
]
const navigationListWithId = addId(navigationList)

export default navigationListWithId
