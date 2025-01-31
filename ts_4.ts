const arr = [1, 3, 6, 5, 8]

function sumArray(array: number[]) : number {
  if (array.length === 0) return 0
  
  let sumEl: number = array.splice(0,1)[0]
  return sumEl + sumArray(array)
}

console.log(sumArray(arr))
