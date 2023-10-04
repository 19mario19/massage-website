function addId(list) {
  list = list.map((parent, index) => {
    let updatedParent = {
      ...parent,
      id: index,
    }

    return updatedParent
  })
  return list
}

export default addId
