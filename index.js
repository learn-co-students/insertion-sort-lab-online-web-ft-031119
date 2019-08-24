function findMinAndRemove(array){
  let minIndex = 0
  let minNum = array[0]
  for (var i = 0; i < array.length; i++) {
    if (array[i] < minNum) {
      minNum = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex,1)
  return minNum
}

function insertionSort(array){
  let sorted = []
  while (array.length > 0) {
    sorted.push(findMinAndRemove(array))
  }
  return sorted
}
