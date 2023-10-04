import Home from "../pages/Home.svelte"
import Therapists from "../pages/Therapists.svelte"
import Massage from "../pages/Massage.svelte"
import ApplyForTherapist from "../pages/ApplyForTherapist.svelte"

import addId from "../helpers/addId"

const navigationList = [
  {
    name: "Home",
    link: "/",
    component: Home,
  },
  {
    name: "Therapists",
    link: "/therapists",
    component: Therapists,
  },
  {
    name: "Massage",
    link: "/massage",
    component: Massage,
  },
  {
    name: "Apply for Therapist",
    link: "/apply-for-therapist",
    component: ApplyForTherapist,
  },
]
const navigationListWithId = addId(navigationList)

export default navigationListWithId
