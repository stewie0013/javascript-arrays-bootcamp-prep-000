var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  newArray = array.unshift(element)
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
}

function addElementToEndOfArray(array, element) {
  newArray = array.push(element)
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element)
}
