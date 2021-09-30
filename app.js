function insertionSort (unsortedList) {
    const len = unsortedList.length
    for (let i = 1; i < len; i++) {
      let j
      const tmp = unsortedList[i] 
      for (j = i - 1; j >= 0 && (unsortedList[j] > tmp); j--) {
        unsortedList[j + 1] = unsortedList[j]
      }
      unsortedList[j + 1] = tmp
    }
  }
  
//   const arr = [5, 3, 1, 2, 4, 8, 3, 8]
//   insertionSort(arr)
//   console.log(arr)