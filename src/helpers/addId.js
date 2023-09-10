import { nanoid } from "nanoid"

function addId(list) {
  list = list.map((parent) => {
    let updatedParent = {
      ...parent,
      id: nanoid(),
    }
    updatedParent.children = updatedParent?.children.map((child) => {
      let updatedChild = {
        ...child,
        id: nanoid(),
      }
      return updatedChild
    })
    return updatedParent
  })
  return list
}

export default addId