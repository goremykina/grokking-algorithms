function findSmallest(arr: number[]) : number {
  let smallest: number = arr[0];
  let smallestIndex: number = 0

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i]
      smallestIndex = i
    }
  }

  return smallestIndex;

} 


function selectionSort(array: number[]) : number[] {
  const newArray: number[] = [];
  const copieArray: number[] = [...array]

  for (let i = 0; i < array.length; i++) {
    let smallest = findSmallest(copieArray)
    newArray.push(copieArray[smallest])
    copieArray.splice(smallest, 1)
  }

  return newArray
}

const list = [8, 6, 4, 3, 5, 7, 9]

console.log(selectionSort(list))

