const Instance = (function Example(nameIn, inputIn) {
  let name = nameIn
  let count = inputIn

  function getValues() {
    return {
      name,
      count,
    }
  }

  function setValues(newNameIn, newInputIn) {
    name = newNameIn
    count = newInputIn
  }

  return {
    getValues,
    setValues,
  }
}('XYZ', 10))

export default Instance
