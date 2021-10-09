const getFirst = (el: any[]): any => {
  if (Array.isArray(el) && el.length > 0) {
    return el[0]
  }
  return null
}

export default getFirst
